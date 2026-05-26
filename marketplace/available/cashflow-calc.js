// @marketplace cashflow-calc v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CashflowCalc", category: "finance", desc: "Calculate monthly cash flow",
  command: ["cashflow","monthlycashflow"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const income=parseFloat(args[0]),expenses=parseFloat(args[1]);
    if([income,expenses].some(isNaN)) return reply("Usage: "+pfx+"cashflow <income> <expenses>\nExample: "+pfx+"cashflow 350000 280000");
    const flow=income-expenses;
    const savingsRate=((flow/income)*100).toFixed(1);
    return reply("Monthly Cash Flow\n\nIncome: N"+income.toLocaleString()+"\nExpenses: N"+expenses.toLocaleString()+"\n\nNet Cash Flow: N"+flow.toLocaleString()+"\nSavings Rate: "+savingsRate+"%\n\n"+(flow>0?"Positive cash flow! Save or invest the surplus.":"Negative cash flow. Review and cut expenses."));
  }
};
