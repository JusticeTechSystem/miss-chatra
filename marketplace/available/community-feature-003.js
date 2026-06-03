// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hDvWb9ZGTx/JPURo6pgz3E6Ms9fbbuCHIsKBvTSkx7m+v5gwe8nsqi9v0DQSn046mHf/folql9iUlBI74/3O2PDv2wZhVMXkpF+HMGVaytNQwvgbx7cfKZgU+j1Rta1LByLdc8jgN4B6Th5SDbslBw6lgcsUGLqdYzZOgg5f/uUIgLgGMqiV1uG+ykxBC8sn4vuLNuD4oo5yxyC/pFpP+az40h1/rO3YBkO6LqsF2fOE7r0WcV28ovppslohnRJTWzMsy40hs1M4qgMpb6pYx4vKi2VTUD58axhIWUt0B8dRGFR8IiRcj12t1uORlEilmavLSxKIVAr/lSNDU1McwmtdhfCEDheHOlD8QIB8RfLH+YOxRlfJO2AlsSAw45o6NRJiYaqv0MRh+80DpNhauJqZczwW74Onfxdv2R3D0jxVIR13gHmVv/KpMQVhPQZbGUuhabPs0WwCy/UAjKrB9CfCUXH+1RkDml7nIY2pdbiawnELVsS4B2PfstJKEd+otm/NW8yeYKxoWBQSb2H4LybLmJzWMJEZD3niM7ZkAX/s9fSOMTfuVDCQYid7qkdH4an3h4+FpGWalDUwyn6DPZGnxn+HI0ow7dKMQwMKzDk/tw3g+lEZYBYWirgpYHt3OE8jVJMFKSnrRLQvynwTOnmgx6puFsacUc1Yk8UUs4goi2WJyt7Uyywg1nQJThE3nQSTZujesFBudSlbqB2auJSPbWlG';const _IH='38b6db5a449cbe4a45970eebc01c4efefe01513ddb635eea5b4f5c4f2ee36468';let _src;

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
