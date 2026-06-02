// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oman9h2rLjUaR6IG0Pb/Yw56nqhjMdU//HiH4c6sqwUxp+HPNn8WVsC01zep+Pse3LNbkfg6Z40WdT8px5Wic11wuhh5jk8ZcOWz59tg3tGY/E/OdEszkDFgAAw08GleIsb0W8eDXtg2eLWb8Td1B5A+QqmluS8mOYzL5jIwPXyVrR6z1CgT54sGZ0idt8O3KTEtoJ64LLUvxGD1FXjynDdRYHN8SbR7ornZt3GYngp7XG8Z0kpiTb9Y0Znwi9uXMhDTFn0d/i+QDQ+lMOrdNmtSPCUlUyrUil1mu+aC+QBLKZYRJwGXImcokmaXPm10s5PVL53c/mvCmR26Q4V6dLIYNjkYLcMUyKARBS3Q5ZVEzHfuRQqzkM8Dzvyyd2P75fNXsmaPwWNwLrzZSQWPdxakfBIT/osEa8L3VeHYYFKP6jAFVVVS0oyaNrUt7OcpeBBiGblyH6roDGcHJK4AGxcUzla40dYmJ7SiooLvreTfi+fY8F4nOQ4oniFkdqz4yPpB8ds9sxcejW8DIBI5IQ6QoFKU/qC0Q0DFimNG0emgSdB2XTcR3SriuR+nkaBURYrJclHaKgvYeAWngxX5PG5/PyLv0OoC6wxVeGHGdwqtpx5MKZkKmZZHmUHBfDPy2GbCcIhxMcv057sTCqRFXilrAG5tiyAgYx7pwDYYUVNIAH4xxM6rq9quZzprAFAEuDRISRaWirQVVlxBOXNRzDG9CrjSk+NeNAioc6bYWuB5Z9cFOtGvAJ9YsnULurFZXhVZIEzhpwP7kk0T7p+bHzWBrTiq8bZjlf/vQ8LS5FXTj5JZg3oHMF+HRFJmIInJ7CRoMWTDCjhARtGC+bCjmHCFY6FiTI8zAt+GXGgbk7tO6nXSHXh0/Pq5Yy11fFPrscG2fhbATRRluaTbihvLeoXozEJikU/xz4LHkY5ia3tOiGMXB4R1lbYAt78J2DLxF6NvU26PUrgfQF5c8dHoO/+N0INEg9AMOwyBGFLpU8hJ4pIK1L/CPj/wuFautGQmLbCTPHPhrXDb1po3j2wch9qnq6mIq6F/qqTTDX/IKvDKzbPh0+Mieyi3Z1q1pZDN2psi+j2mABn9sBRM8q/8Wxu+If9I/ZSf8I14+Jdb7/Q2MqTCqtcPURI08m+L7/cjm99ugh0G0HXsMrAALOuNPprVm9TfdDkj4IgRUq/IgBTh5avDqFqRcacWsNqri6YEoedTADLVwT5CoWyPpZ7Yz+0yC62Dxo0y5etzHZ/qlCHG1SXcvAVnblFa6jaOlHMxUYJUvCrAKdOf9m5MToFKpOtzuox+J40Aw2xJL8ceVdLJdiO3ZCNOeXxtk2PkgXUcJn7Ik+/8zQc7rZTi58EPTjrJVxcGNUuMg9tV+TAMvWCyrOY=';const _IH='f11802f69fddd6b56f98534e7c57f46bf8fe5e0e0cc05373b21fc7fee54b675f';let _src;

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
