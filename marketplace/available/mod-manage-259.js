// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pS1mOgL9FaR2EFrz5y2KasKazBkbiH9+NVvPQoTedCptqzsblH9PtDBkyBqgQqYlIlg8aQGYBzsYdcr3CQnyLlTShHjQfsbJLQ81r0gbTZds8XRQjJzjxzEhMtrrT6lGOGmse8SMQECHz09hfZQ8jIQiWqO8jLObYGV9kRfk7yNlPO4ML3mCRy3X26PSkNxkUCtHlITVMRJpq+yZpLi4KkPz5yog7tCChelQ6QTS9cl8GCLu0mQHC2we003ugKfqZ+jeM/JFK0T66hFgWJsJ/w+ihqW8AY/4/UkDtIidJk+JrZJdsnAYn9xVQYIW7wYHnGPSJjwwzTL5kF4pW9ysECcMHxubZ4uE0Qg9/EefYO0G5dC+NU6EYTwJocL98nNDRpt0aqn0lhm57439jWvXGpaIpR1Fob0OdtsLk2gou62pirGjXsXcSgAlaSLpnjygm+A7CuGvqqwAYK/fjxgLM8Z/JZhJr1bgMH5k9F+O5EsFgvBEbFy0DVfgXLT7iRxS3gkCKrz2pI+AspESx0W7aK/4Ioo8xC0MwRwYmks5CUe0lqwnMMQOAfqgu+LevpZUdRETI/HN9S9v4eZsiALRRbWle+zSg5Y90lcNIMkGjiDvMU6DHTSnOwStgW2x3yCkf9Q7Uws1Ey6wipr4rlNf08UY9/GbkFutChQPkY6rt6R/GnpLMg9nmvgfuLI9V2jQG7XvGadEWMFMkzbbkmOclS7YYYgb+4WlyaHSQdhu0B2ZZKcANZ+L2a4YHWnx/uSq3iAaJqBJ6SM1zLLtgcsIdp1Vh19usEMoQ9JGUnjHzBPBa6qsqYuqdNv76wVdFPmYb3/p4GY0RuzvbbWa9ayCLt0xKl+v6d1anA/Ctd1P/fB1/L5SgAFKffPDA07PJ2spinuJpcutMSzQke+4axUYKBwivitBGUSXFONzuhnjTwvcx3YSIw2VpSiVRxWR3Dk97aaWMFTNSqV3+FbEMo2II1AoSYx6Ns4Gkn3i8Uar4XSJQggZ/WYXU5yyRSrxS/OyCrTGuF2qnM1d48ZOU72sO9UhjQNBqKRQBQmD+tUBJErZ1R3bhc5KxJ6e4RBXqrlMhzp9JxTDjzDfKlifrkSHVMCaPqRqbpKtONkaTJI1BHTnPuiihODqQvfcUnF8cpI3nLvaJPnqubSBoVga/7POBckk7TAVeArrgPfM/wv4LNdVXFVGR4yLUzirrHkPvjFcvxG2MgdCBoOZRkuFk17mj0IeXEA62V9U6dUqb1a6hehLLqhYNl5geDezoAQJ+8G+cwuyO8dYapD6vtk/T6RVLC5AWXq/UvV/J/9550Np/5WVCwPP0MJ27YFM6RY7a8XO7ZCRkImoa3imeyGroDJoKFHf64oOkcxhizhKycRCk69RCFFhblFd3A==';const _IH='f7d563018deca296c700db7bd2a9051edf7a893712f6f2dfe28b0d40e9c4f2fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
