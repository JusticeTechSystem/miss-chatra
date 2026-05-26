// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FQtXKxN+h0uHXtzd1GAPca5pakkhXGOxZVT4TTLXDVxSZCY2zAYy47i42Ii5U1Hx+5u31czTEe8XCA9tT5cqXurnR6o2txd18ArLSZmeGUJ2uO2T3znGLh0PKIbQrVHBbLMusjnTAy10/guY+u55DXGD4JXE2cKhOEM4Q2/8ENezKSiQ6OareEQHwttSPyzbxhV7FmcnhAJKLtz6krNf/fDWpG+wqtvuFFaJiOEzrmtQ/9sOdF8UD6HdZsXneXi1uwUfw63tL/kTXzUksqWIqxPAgrSf9QLTtXG0UbX2XxGNkI7YTg3jWRMK45cYRkuWEVlzEyfmJSgSGKI0wkk4P/tWqbnDNzZMZ2AtKvheiTedplatYHHXnYYHRhxsZ2++/EkoUy1nOZNUgrfCqwltkRwsPjf9jfuqwkseiNMqkM9IdLmVcBT1FEz/U0k0K15e5C1xsD/jLGqD9nZDbTywHt3/ZFXvdB/imFnZGPHcH9GuXpxRha1eLQ6+RiErqi/GDcI2kMIDGuOdoLp5UdunmlJJZPO/eFWOyB7mHBxoTFLqwhNqF0mn2LYwf3vmMB1noKEZ7eDLhClwIQaiRxRWGmW1/DbyI4ScWKIMQydNQSk/2FNgmBcXLmQ8WV4wr99ZecPIXfYgmUk2DpTzqNDeC/p/v988ku/84kTtCSVBYt/BEDvr73C93UoK9mvXB+4ha1J6rB0uBC4cJKeJV5K6vTfkyv+gvZWdqpULpVx3II0RuiIanBQKtbs98mfvZxKyWLhEi/8muOblflmvZgCIljqnemaWhqfMDvjwyBqbxp0ExAkXF3Rh7Df9FULcWRemsrkEQmeCqu21wDZznoPqR8tAThYWweE4DbT7efSGo5234N5gM0uIlkBWbfPiXHHXOm8KVY1/jYRNJmhQ3e8pQuxpmceDXJpiKRbebkmXfPDX+xRlqzI19KBVYenF6X0QTSeudmFDcvNz5p1skQn+5RLHyxq8CsTPprKKUI53+Nainvi2W9VQWTZUH/5wV8wMVceDJOkZZ6QG2SoeGBsbikYFcdFX4cvczASrpXe2cY1+GpN39KUhmMtXdvCSG/sjLaINZtWfLx4nx9ZU6J/euO8MSA3vyAMpUgg8fY1TWeKfxiHXAVEdBDaGSgcgraGKh/T7s6gx8LUK8ofP03BGsGJLI1P+VAYlhw872jk/o/TW1SDgO5FLDGdxPJBgp5rnvZPZvcoOrqHUdn7c7ZiY2+BmDqqZMS+hSbY3Nk8reA1K36qWXfPijgocItEfpiku2Y78MUeZqR2e2MQgieI6yvWYhfh/axptAQO/Wcs/bAvvoOKwQdqUOey2LbKZobHpvHbpnrU3sP3IB02EF6Hk437HQ0bOcsTdO+d8nNCg';const _IH='34d6c2d40fcba6df7cf74fc3f44fb06aa08b08d86c841b714e38e20b15440068';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
