const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  // Loan Information
  loanType: {
    type: String,
    required: [true, 'Loan type is required'],
    enum: [
      'personal_unsecured',    // Vay tín chấp
      'personal_secured',      // Vay thế chấp
      'home_purchase',        // Vay mua nhà
      'car_purchase',         // Vay mua xe
      'car_refinance',        // Vay tái tài trợ xe
      'home_refinance',       // Vay tái tài trợ nhà
      'business',             // Vay doanh nghiệp
      'credit_card'           // Vay thẻ tín dụng
    ]
  },
  loanAmount: {
    type: Number,
    required: [true, 'Loan amount is required'],
    min: [1000000, 'Minimum loan amount is 1,000,000 VND'],
    max: [500000000, 'Maximum loan amount is 500,000,000 VND']
  },
  loanTerm: {
    type: Number,
    required: [true, 'Loan term is required'],
    min: [1, 'Minimum loan term is 1 month'],
    max: [360, 'Maximum loan term is 360 months']
  },
  interestRate: {
    type: Number,
    required: [true, 'Interest rate is required'],
    min: [0, 'Interest rate cannot be negative'],
    max: [50, 'Interest rate cannot exceed 50%']
  },
  monthlyPayment: {
    type: Number,
    required: [true, 'Monthly payment is required'],
    min: [0, 'Monthly payment cannot be negative']
  },
  
  // Application Status
  status: {
    type: String,
    enum: [
      'draft',              // Nháp
      'submitted',          // Đã nộp
      'under_review',       // Đang xem xét
      'approved',           // Đã phê duyệt
      'rejected',           // Từ chối
      'disbursed',          // Đã giải ngân
      'active',             // Đang hoạt động
      'completed',          // Hoàn thành
      'defaulted',          // Quá hạn
      'cancelled'           // Hủy bỏ
    ],
    default: 'draft'
  },
  
  // Customer Information
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Customer is required']
  },
  
  // Application Details
  applicationDate: {
    type: Date,
    default: Date.now
  },
  approvalDate: {
    type: Date
  },
  disbursementDate: {
    type: Date
  },
  maturityDate: {
    type: Date
  },
  
  // Financial Information
  totalAmount: {
    type: Number,
    required: true
  },
  principalAmount: {
    type: Number,
    required: true
  },
  interestAmount: {
    type: Number,
    required: true
  },
  fees: {
    processingFee: { type: Number, default: 0 },
    lateFee: { type: Number, default: 0 },
    prepaymentFee: { type: Number, default: 0 }
  },
  
  // Payment Information
  paymentSchedule: [{
    dueDate: { type: Date, required: true },
    principalAmount: { type: Number, required: true },
    interestAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'paid', 'overdue', 'partial'],
      default: 'pending'
    },
    paidDate: { type: Date },
    paidAmount: { type: Number, default: 0 }
  }],
  
  // Disbursement Information
  disbursementAccount: {
    accountNumber: { type: String, required: true },
    bankName: { type: String, required: true },
    accountHolderName: { type: String, required: true },
    verified: { type: Boolean, default: false }
  },
  
  // Documents
  documents: [{
    type: {
      type: String,
      enum: [
        'national_id',
        'passport',
        'driver_license',
        'income_certificate',
        'employment_contract',
        'bank_statement',
        'property_deed',
        'vehicle_registration',
        'other'
      ],
      required: true
    },
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    fileSize: { type: Number, required: true },
    mimeType: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
    verified: { type: Boolean, default: false },
    verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    verifiedAt: { type: Date }
  }],
  
  // eKYC Information
  ekycData: {
    faceVerification: {
      status: { type: String, enum: ['pending', 'verified', 'failed'], default: 'pending' },
      confidence: { type: Number, min: 0, max: 1 },
      verifiedAt: { type: Date }
    },
    documentVerification: {
      status: { type: String, enum: ['pending', 'verified', 'failed'], default: 'pending' },
      documentType: { type: String },
      extractedData: { type: mongoose.Schema.Types.Mixed },
      verifiedAt: { type: Date }
    },
    livenessCheck: {
      status: { type: String, enum: ['pending', 'passed', 'failed'], default: 'pending' },
      score: { type: Number, min: 0, max: 1 },
      verifiedAt: { type: Date }
    }
  },
  
  // Risk Assessment
  riskScore: {
    type: Number,
    min: 0,
    max: 1000,
    default: 0
  },
  riskLevel: {
    type: String,
    enum: ['low', 'medium', 'high', 'very_high'],
    default: 'medium'
  },
  
  // Approval Information
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvalNotes: {
    type: String,
    maxlength: [1000, 'Approval notes cannot exceed 1000 characters']
  },
  rejectionReason: {
    type: String,
    maxlength: [1000, 'Rejection reason cannot exceed 1000 characters']
  },
  
  // Payment Tracking
  payments: [{
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    paymentMethod: {
      type: String,
      enum: ['bank_transfer', 'cash', 'card', 'mobile_payment'],
      required: true
    },
    reference: { type: String },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    processedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }],
  
  // Outstanding Balance
  outstandingBalance: {
    type: Number,
    default: 0
  },
  totalPaid: {
    type: Number,
    default: 0
  },
  
  // Notifications
  lastNotificationSent: {
    type: Date
  },
  notificationCount: {
    type: Number,
    default: 0
  },
  
  // Audit fields
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for loan code
loanSchema.virtual('loanCode').get(function() {
  return `SHB${this._id.toString().slice(-8).toUpperCase()}`;
});

// Virtual for remaining term
loanSchema.virtual('remainingTerm').get(function() {
  if (!this.maturityDate) return this.loanTerm;
  const now = new Date();
  const diffTime = this.maturityDate - now;
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  return Math.max(0, diffMonths);
});

// Virtual for next payment
loanSchema.virtual('nextPayment').get(function() {
  const nextPayment = this.paymentSchedule.find(payment => 
    payment.status === 'pending' && payment.dueDate > new Date()
  );
  return nextPayment || null;
});

// Indexes for performance
loanSchema.index({ customer: 1 });
loanSchema.index({ status: 1 });
loanSchema.index({ applicationDate: -1 });
loanSchema.index({ loanType: 1 });
loanSchema.index({ 'disbursementAccount.accountNumber': 1 });

// Pre-save middleware to calculate totals
loanSchema.pre('save', function(next) {
  if (this.isModified('loanAmount') || this.isModified('interestRate') || this.isModified('loanTerm')) {
    // Calculate monthly payment using EMI formula
    const principal = this.loanAmount;
    const rate = this.interestRate / 100 / 12; // Monthly interest rate
    const time = this.loanTerm;
    
    if (rate === 0) {
      this.monthlyPayment = principal / time;
    } else {
      this.monthlyPayment = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    }
    
    this.totalAmount = this.monthlyPayment * time;
    this.principalAmount = this.loanAmount;
    this.interestAmount = this.totalAmount - this.principalAmount;
    this.outstandingBalance = this.totalAmount;
    
    // Set maturity date
    if (this.applicationDate) {
      this.maturityDate = new Date(this.applicationDate);
      this.maturityDate.setMonth(this.maturityDate.getMonth() + this.loanTerm);
    }
  }
  
  next();
});

// Method to calculate payment schedule
loanSchema.methods.generatePaymentSchedule = function() {
  const schedule = [];
  const monthlyRate = this.interestRate / 100 / 12;
  let remainingBalance = this.loanAmount;
  
  for (let month = 1; month <= this.loanTerm; month++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = this.monthlyPayment - interestPayment;
    const totalPayment = principalPayment + interestPayment;
    
    const dueDate = new Date(this.disbursementDate || this.applicationDate);
    dueDate.setMonth(dueDate.getMonth() + month);
    
    schedule.push({
      dueDate,
      principalAmount: principalPayment,
      interestAmount: interestPayment,
      totalAmount: totalPayment,
      status: 'pending'
    });
    
    remainingBalance -= principalPayment;
  }
  
  this.paymentSchedule = schedule;
  return schedule;
};

// Method to process payment
loanSchema.methods.processPayment = function(amount, paymentMethod, reference) {
  const payment = {
    amount,
    paymentDate: new Date(),
    paymentMethod,
    reference,
    status: 'completed'
  };
  
  this.payments.push(payment);
  this.totalPaid += amount;
  this.outstandingBalance = Math.max(0, this.outstandingBalance - amount);
  
  // Update payment schedule
  const nextPayment = this.paymentSchedule.find(p => p.status === 'pending');
  if (nextPayment && amount >= nextPayment.totalAmount) {
    nextPayment.status = 'paid';
    nextPayment.paidDate = new Date();
    nextPayment.paidAmount = amount;
  }
  
  return payment;
};

// Static method to get loan statistics
loanSchema.statics.getStatistics = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalAmount: { $sum: '$loanAmount' }
      }
    }
  ]);
  
  return stats;
};

module.exports = mongoose.model('Loan', loanSchema);
