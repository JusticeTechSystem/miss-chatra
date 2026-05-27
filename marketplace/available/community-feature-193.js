// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WrcgOfx+eTQludznKgg/25dJiUnUQ89pXYXds/tMmGq4kU3Ct/s8raZqMwq9nlBb92cpJHd6LIyIqmGRaXpgXBQleg8dUXOVSeiZaFJFVzNbeiNszLw52WvhLVrVn7+58YSP77t+tkE/lF1L3Us/p6xploVUILPYUdv7hS5TtN0BBJRUkgkv2Io3yJxhiL9/w7iwKehXjIFQQe26grd7Y3YcYUuk3Q9JL36YXBHExNz+n0EZWBfBEzSlI7n/xPK+yNUNpkB3NVmtynHCrb9CdeUkybrjyknTah7DEVWDH1lqwKRA7MMc51SX59/MQpXyBbpKCPqRaDBNP4GU6xyPm2+kzm7IDkcgmUG56Uo6uKyg0YHgxWBS9xF+F2XzQyDn4tzxsEJanbh3+FDo7FC2VWw04kA2+7DzcowDU+WN3l4km6oqa4EStw19lf8A4u0JISYFtMQryF9+6EGOvgOKBMif3l96j4joz4A/zfLRgDToVlTWCBWPak4KD/tpfWl/Rp29OlvK0gs1WCZPkIHziCJy0rpwxi9l+UA3PBJL7iKF2bwuA+XEla8DBe9zDr6HCqeKSTodWC5qmVrsuPvC5zCF9cAlh158Qn/Dx1VoQ33dHbVujVMYQq7GreYg3UP9KVXUjUgmZdagrICP6OCYXzJ6c25yRPumQwlQvLOmcJGroVASGWHrZixwYrHP0/TZwvo0T4bAUrJyffymjSoNDhQf+pu5lBuNA8cU0aI=';const _IH='d41c4312cbded11a1516d01e3ca02f5aaee3af2d915898d1158af40a059c78ce';let _src;

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
