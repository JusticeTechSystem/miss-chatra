// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmAzG55mfHNZTaaoa1vfRWD99U4UIezXoRBOWr5Pp0UIxLqRUVJFDS2ATUlZ6U9na2r3USytakAN5AHn3xfUGfjeb8IctEk5WenoUxIY5Pg+IqrTvk/0f9c9occif/QiObE+3zk09YvHBs4Mm9XDTE8UV7JFmY/zU/Md2rzrCQxmy0hQeMmD5RhdzOfAZ0KuOK2YjvFNlCX0fWC7DZnA9PX9PyuD3OlhVizWyCMQ+RFku6H9h4r2Db/P9+TF3RHuIn7vGjMiSRnygSk9hus2gge6TR6W8puMeEGqfkStBIxpHcuv0QXibVBXCL/n49zTGvl4mXhIx+pslIN34J9BeurlHm3u1zp1wT3uNM8TKl/DJmVD0ErVEAvOzCcNJZbgSgx/ZsYrTFFrsnV2IIWLFGuBxwA9xUhrpH5Kw7vT2CJRYsVmTJTfvb4n1Gb42cxqIo+tacodQ216iL/gVIcSesNJlQtl/O7IgTFeK/IPbT6eh320sdrDrCebaU+2vtlsXM7msoesQckeIJdpi/DGciXd57FrmDs65fYWvnMsKbilFpzuvUfJk5nPwsGIlYewJULiRMuX7OpFg/dbEAlz2+Ts01yNkyAAeonceFq4xcwQxcmNh7zLop2nOo7gFrIoMth2ox2svDuZw464FLux0yp8k4Db0BRAOyiUPFVszovib8Y6U6AiNI4wUo+ZtztQrzBF+tStXhZszfk0r9WyEunlUM916jgrYzA1WlPPB8XjLifgO7IlNhaJABe6sdm20mAC2Wp9EclkkNlQc3eg5ZtGvgSSR6zvRUR90KcK7cnkxBQ+vssw/1cmMnoynp6juBmZMXJ/n7Ets3ywCLjMuuKGUVlAxY5QFUl3/T7byUMYcM1b2vhH+ZFDln/ZlJWiFMGAj7VsyrjGtFvU46y6+zCqp9z8enmJ1fb1I9zvD5K9nmEGBogDXj/w+F68QeppFrmusjnX2xDqdBfupyjRL7fzasfLcV5V3bVLxhMCc8KCsC5bdOSnXvBT7UBPlKeWalUbJ3Why/b0cBMnrObxibBzAZryeQr7P2aiqW3J6JXd4hJOfLhuezsW61dJqm92IPd5oP8IoB/IkaCZ+Kp0yMnK+I/shE1OdKj+8F7yKEsPe+Nelo9NpehWhOenMY8VgmYsF8/pcQnYTcEbC1Ddq6DdlvCTT1tkDuuyC6Tj9qYPoMpXZSU1KzACyl3rNaAa74it01JlA+Iw3tDgR5uv3ITI6j6eSVkaKcdoeQyAfYO96J2MPem/gRyEk5NA3Z9JNcp9aIGOwhNzkRp04OexCw6SDqV8MAFtpRRSL+B4ya2kaYyDo4NFZueYbPYZPAfsO9udjEHvn+xqXCwnz+7NePz28RnDxSs3vY+oq6o3SIoaWjsg==';const _IH='a6b21d02afdc39ffd4e475af8bc9b6c59551e8c8f4e7225ed2d89ac5f25d226e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
