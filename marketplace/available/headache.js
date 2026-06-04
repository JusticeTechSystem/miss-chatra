// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AzJz/sXTXdTUXV1jmLLIw2v8OYc8PnJI5rnq7YAQCQ4riwEzJJV496kEGnVNueu5GjqAg1W8O4ca9HjnORC8BFlRq5ZzKfGrFaPkPyTl/XjZzPwsREF702RBJRUGnjynZFO58LNerr5ELjtwAXEXzCmbGONDUBQ49PFTC12rJpeX9mKE4NFBH0HptqC328aVeOVqSVEYY1EAE6H0irGZlQSGxGw+mefH2Qo/7BFgvTIb14qtoAB+NotBcBVCfS+FAJ97nq+LCHni7cBMYVdXPPVjO/tcxknjQaWg4cjN2a7Kx9ulO94ACMdlZOQ37eTzWt2cBnJqgA8vwXHAdBkprP7iN2kPfONHEKbCwUhmIuuuCVnz8JUQsnKrNDBUeoLzcdez37+NgUhHVzi0smZJ1HWZYrXa6CME4jqXBOKiaZCFEFbnA+UaKk8lF3d+T8txFi7D7m6cn0tO7gx8lpEvCFhwqbuxDrVUoxpeB4IMKsIjgmp7x8DeX3gKULk4U2U/wmGGiYdB1hvWDBPwE3+NuR+MlV0v9hhJOJl5KLV0nUT7OWDewz16QhwaM9n9V7NpRStebtjrOndpE/jkFqS/2Fouc8Vcq1F4laJZPpCsu2xw1/aPEdAh3app1aPiT4i36i6huZAv7+dqBGey/upVaHnCM0ZObzffgc5tyTTeHTC4jOIprNbbV4YdtXtbQWtVr45oH6as5cUi/YHpsBIluCNbRmUaO2od0bScxqJio1wIVLJa1GTNusNBeWYck7NSA+4nGrYCZ3ckMNLebqm7TX4KeVwBpGC3zRL92uVtY8y4wHMSrICUnTjCkGOz8mpQPES/fEnvpirjaRiuH3dp4BHet55m2uNJqsq5Qj91s1dIXx3y1d55I6maBJqP6/xH21D2Qy+HKnuxrJcQTY4UCQ2FUkxmiK5a0Rgr0zRbtsb4ar7SBoUtV4YGWwAjOoWWtTUWtN6B9AS/4gOnDzPAefexnSoWO7B/DXhBgNkpX69dOanTDzqIt4S5j0uG8TbTglezFZzG/NMggIByuk4+E9jkg9/QBvKFjHFJphLpjlg5r6Ocxf6ObFk+UPFIuQo/nN7bJ88zuJ6/uJIGjSAvrhoIp3Mzeg6uQ0YJb5IlMEqPJdEh6XJEIlVHThNa3VfjzkOt2ve/GVELJtDDrnV98JsxZP95hSPhdvXzTxolJwLs7YiIR5OX/pKnPGKPXa/CbzQ2U0A=';const _IH='787b9c0e3e1521f3eb061854f859dbb208c58dc006cbd991e764f98af530b80f';let _src;

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
