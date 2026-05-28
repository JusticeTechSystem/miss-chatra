// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PbnNIu9loipuHbuIXlKmeFtCII8g1pkhfqQ5gJ3J336YALoIuHnpVBa1qlciDeqAeEM2i4yL20gHD8r4rUODGQalI/COlzPFK4G6MExrUNVPkB/zsEC92KRG8HH6nveTLnoM1D+OYzGU6jId2PmLUomqr82gXpQbUmbYEMEl0TAahhwd0NYHL72guaPTcWz/WsE80V+Q/gU3d6IhbcF6VKJjOZZZsoQLoH2AUD9t1omz78wd49zC09hZDjKavw+J6pcdKG+/0CI5rXX9OYz+4U8RxnOXlNoaHGUeIP9gyREc2YRdHIC6IXdDgyJmysp5TelTPwneFb7bh7+Mr9tPgqMIGWkPmGSQblRarOgQOYq31Jv2qs0KtQRJCY35ZNsg3nNbYKSax2a25ZrVJzerAJ2DEo7pGP5cwvGUUJ0U76LBygCQywRfAszsdfucmlBF5F9JyPuztMdMi6LgKF9cRxu4E0EBQdrxBSrystNnF4xmIES8qf2+c2F4TNMPYNQdvbuU1O7pTjzjAhbrSlQyhRgfl9bag2A3ueijvXhfTH9b/O/jL5lvdBbjmZYo/zAsyZjE9j73ZDxVbJlx/GwykRvq0prt+rbJjLhcCSzelEmv4vI58p5fcWis08K6r4V+asw03toqVqFjzVI6ddpbypGm+Jzww0VikEmOMjE7MaZMLSnfjcWenMBceW4W1Z9/0JQRsRPlzz4zUSxiaeNp7hrSrcrZgFNH1jnYEhWFdEgoRgvTBn3O3Wcu';const _IH='0dbd0c56ab834482083624659f85bd16c9cae5c1f19e1b5b51587a1efb860faf';let _src;

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
