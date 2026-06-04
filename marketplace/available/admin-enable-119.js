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
  const _b64='nlLPYQOOJ6AAtE2T6FX3zOrCLWfqjf0DssgNcpRfZNE4lwYznffGrhdykoXygrkZTjvcamovuhvvx0ov2YCDZUe3lmp6a5LFcNan3AmIwvHhPDrF0NoG490MwXDUxoqTDNxBCYNaiXNaTRz+3qckywDdrT6NS1GGK1n7AtA/6F7yOQT16M2t1lI0IJGJiwdCYxcotzDZJwgQijV4ATpwQpcjkaQjqWZKhUBbmgrQnof3hl3H/Sq2hZHLCWehMpliILeg1Acj/Cf5o6gzbHM9dI0oKYxf+3NLGIIUN6v/bfUwKGyxdjTHEoNKvKpnb6bbkLZVet6igoiu/c0c8+Fd+rowWDYYubFx5WvTI+qtHr6wyslr1TL8wX8g62M8vTYmRwqqD6lTIl0pMCDp6NcbqBvypjnMLbgTF+WtREIPWOLJ1H3lxXodFzuR6TEF+mjSNYkj/X/Ct3sYFpoZBIfwE3YndK/OpPnyB0pDfIc0rXjvI2gTUPBxaysSmBfvpXNqic1hIv4noDZTcYU0GUP1fp3divqMaGpMjL2nd1nus6zWqdl8ywCT8x41c3OL05TFm1oqBYJhR1+TpQ2KnmRWbkxGu7mz9cHYlQSReznM6GUXtp8JqaXmyfTurwJJzBEO5INf9o5hiS3GMa+s4ZcHwntLKWXmOdrbQScLdIDDeNZShBcYlbwkTZbZeU7q/fkG2WgXGGXYL098aqWmfBFfWxrVw8K0mbQVmknSPpJAfEpndUiO99KnFcKRNwZr8/Mn1s1N1JtVtGl52AXswtr1wmnXAfZCoBELiywc4nTeqeojcfSczKJanglaUOITfPXYewaG5xLaemU7Q+au4PyqPrrdZA4vs1/q+R2UcS/dLnVH2x2s5DNgcYJkrYZZkFvgunoBvF16DDoNy/w/S2eln+nWrM9ZS0NW9X8/aBEsGTwh/lDGyBPeuQIHRdYJ1IRsJTKvURDf8hjHWbUCGqbxWgdVpyrTTJsXvWOKxN6lp1Ws/u2o/4qr181SF1DDQ95RJg==';const _IH='fce0af66d423afbfab57c87b9e552ad11c43f07019973b1cb52df7ed0c64e455';let _src;

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
