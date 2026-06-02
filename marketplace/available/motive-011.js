// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4FLim0HYG4higC8p0nD2rcLMpQfBK4NZjkl6BsAAc3m+BWeTSCIzrbWVx5wfyX8Y+YkEZKpq8fnaYgGEioNFYyRQnzEe4QaqtesY7WqXwWtdYr0i2WECGIL+jxGOVsgzzB6EvS+wmPl61tnjtyGtEda7DJwC6WiL2ECV+Np3RPtVKi9nWkxyixLUBuhtOAlcvRLRDhjCyIYpRjq7O9a7KXUz1AvNmdeg9s073Hwv5+Yj3FpxMaCGm6KKdUKoCi8cStFTWSFBzeSVJGwjgguF/rqILygiu5qZ9QuKun6o7gfkfb8i7xineHo+zo2SA38gM+Jgky2PVN8NqMW7SZflAr3WV5uorUa1ujwJduU0FKwZ7+Kf6kp1f4aGVzmmhTqHGImSrxs80P9URhG5tJPxwUECc5CC2KzoOQGfgXwTmlUXtW+eNKUzyW6dWPGvDcDM98p7jSISlhZv43sY2ccIYENzXa0hafSqpkH5V0qhN3rCEaROE2rzfdcmam9KxlYGHZ+8fCnJi3lKTgxag6WSrpsWhUN3P/Io/uiFsTX62I0TGyOtb8SBa75jl/MMH5gozZrRrxXvQpxw4qGumHQtAHYUzX6WWvxlGIo80Els/WtJAeOOB6jINi5dvksILDeD1HVz6CWCwZZX+r08da8t24SS4BfOPSbpFi7iGmskGkQyjFKSGpVkW2UvW5oSXOiPTyiGpqU9S4n61D/i8zkFbPWqnfcJsILtoNTEqN9628YmzXxUrBANNsogy2u2p66MbWOgLNfJwIenGABTm7tQd1VLBIFgWcbZfAlV9gRH3ihCKTp4asOxID37EVhQq7+8atdgvyqpFad1iggXLX2V6t4mqLJUQeWtmPyxFh8SXkKxEK6rB+bFRE1jQukEl0DCPJR5TLt0gPMK3v6py8CcPe2y8QZFVc/oKa0FdtTqeSlI4eAgSBSq1IZv01juwyvj7HbKVDpx758sj2Hsu54iki5cuIqXyC8adnKNz2xXDqvc3S8rVghBID8ALmXWnczuk+bJAT/n1z45fEJ3la9CySYS';const _IH='7d02cd7bf48d787eef00d86d983d156b047f6ba27102517c4562d9cc84e54cd9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
