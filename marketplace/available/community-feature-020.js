// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wahqdc0MvJ2A89dFY6AJ+ot31bqWzuPhozKro7e3q6QC6R5WZnzKn49p4w1QEBrF8Z1KvjKDEjS2RTjSojf8oxHRK+++R2wYvBOdFHV/MtdVYLHavX8H+VjfThurFWvYFNitf3/kxGEd3Uqf14tWhyg1oSIsivnx4UN9oGjLvSSDfhAyGFiAeVHfSxcTTks6Jfj8K0FZ6NeodtM6QtLyGPoGJbgDJsbEqQWbG64yxUzPgc1pFlLCltrewkimNuvTQ6IUnbNNYbZDljIt959lKrkr5aa1pSSrYSwU3lRLwUAv8MorojEinpjG7o1yCv3KaHZX3JVStJStUGr8qg3tiwu1AzNyPOKjfYnkvaboBOcM0FAbMMv9sIQLo55WGoDHWHdv1p/+vj5eqIGUVfWV7LDS3HHdTJuqhCRpPPaTLYb/NCfGjawJPohV64fG456qOPMYuw4vaHkMydj49nnCss3xnOQ1SFVnZwT5KThxYnO+s+38ZQiv3CARUqWUtsLgijuH5pmtcAAgSTgMvoB4rUDK6ml3p9j4pFcIad4cEoAK4ITW5sGr5LLmtYcSrCn9+ckJbk14XeMNv9XxU2so1Rfa8RfgVb2Rr/2fRsYxvdaU9HsHXl6iNrfI65sTVTLK00w9lDVRe6/V2k8bjrsSTkhW6+ewozSpwaqbGcwIdqpKiDdyZpD7vga2up/fbYH5NyjpFyzqq4DVxspTcFNJYXNoY8TAUs93PyCztqp/p+ZuMwDxuOo=';const _IH='d460eddace39399777a262f817755ba06c6f8f32c812543d605656ba139afa92';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
