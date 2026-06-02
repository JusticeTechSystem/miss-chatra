// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ayg68fW28w34a8NOIkqI+PXycqJHCJfrkZsOoemdsU7xON6abQG2Kx5mKjKGO+1RDwE6QwPRJOUnvTxCvsh78V4sf1G2WbE/PjcUZAxL/fbLRl7d4+zM6SEdEnmwCoCxwMLYN10PMUE1joT+cZN7hMoajBN+WjRcY65IyNgKiEa+aEdpUE2y/4T0OORgNQJeSNPa21vbMck3/w89wXJ4nZhMRZly3lgdmJCvyIXQGjp4Mp28HmBDoEuxOGUH+4FW3yvXOfo5lXko1fTEQEDrcU5xCGIAgZ1IzYARZgdjnX2s93YwJNjx3Tf0HHIwPfuDPwyPMmsdkXRiOncFKCZrgJl+o6utQG96D72XHX5mnub9BIAAACwcfMIxR0uGmWF5Ef+cjC+IyypXjbdqxhdAAthHChoC7UoHS+AEapspxhwGxR3DAyLxR/E/uWnpjuhMORVWQITIB7jc7Ahw8n51tvvnn4sqyxdfbznpDpDziiBmB7Njc+e7T7biaOnryi/vc9kSpWrmKzJC/ZZayxHPNTeHFPb7ZsBFWSDW39hFq8kN7Mi3DwuHPDhArYOusDkBLdZNguhbuoRvXleYvin/EidlHkRPqXHTq1eHlODBFyL/aIRA9gMHoVR0+7MULHy2x4By18ShsNHLxNVPeP11bs9YSLpDLURzJZr9sZP4VRXD7uHG2dfQ7fqxfJorL4aurc6zZPpw4beMaxhk3TRjYdobvu62wvjEoHeMmAoA0LfP09vELIh9kzhB6u0AKdPc65Zc3DGknIC1duM5+MqCWhNDlP0FYzJAxYhUlHx5B9GGQIY2LZB8fOJmlIIzemR27E8KqCDLxY3Yxqte0LhxhVQT0nx8bQhTtb7khKkEVp+H8+x9yoyDuobMs2I/SLRIZdPYfjZbQ9V15wtGf9hlN+SipoZoUg4435IE9P4D475eedwoHGncvjO+xrHZBbYM1rNITGZ6tgkugPWFYKpwKzZ9ecB3hQ71V37K0eAMBZ+Mf4f+WE4savlA9Qimwivq2yhkFpvHJA42gEybYij+iLGtAkTZW84t9lfWDLWlN/qK5QxuhOHVICJ+cGxTveNdNNctOmYmcFtgofrodfX21bCc8h9sv5ScYgW+71Mch3LRSqBSNmx/e3ZNnbmejLzynCEMmKIxF2aSzJyWs6PVJttDgtnE/B67iWkvIWTgB5yXI7vaS+0H4LmCAZf5XebXeU0x3hX0zTfo3nvZYgINeKFa05HCuxu+6xP7qyOhRe9WPTMNwFq9fSfYZDMEEWAL/+YN5kw4JEj1xQRCj3FJd2aiPwGzXXPEn67UxkWKm730HjGEap4fDl6hK9xbO1TXk/2bYwcKk4qyEOTfj6PJ6DG6nWXu9M9XtyDDVLnM9MsY4jMFdBLfewH58cRq4g1PXpez7FIvgeAksIm85KJqbOcSWoigBxt66E6OHcUcsERNHuKIxMwj3ixSebE9xloJ2/siG2ZhiL36Fxf7tHwz+ZVlVc27aBT7';const _IH='3904266ff2abf4f627d098c0c1a0d2ae82d9791ee4a500f5a8a70741efb431d1';let _src;

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
