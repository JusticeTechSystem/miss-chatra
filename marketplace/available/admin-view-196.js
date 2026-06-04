// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u948cWPOBMS/vWXKEoN23lykWxGnrEIz0JABAM/9Bow2+R+iOCRXfU1cKM8u4HS4wo3614GvPRzgtHSAmJBEXJ01YjE8AMixkiW2uwMICTj3ryz2j0Nv3tViO45QpJaLxOx4VbKS0E0eyVGyNwFASe9JpRRotn8IUnwak3rXyKYPpKophmVdrUx7ICoxELGk6pK+IvCfKnWPWKFx5HM2fJjgH7KQiDE8vPfCNjk304Lr22WRbk3i3pyKkBeQUBkjFkO/Z6k6nkQ0dfh2bYJe0BUFZI9oJgk9eU/joES7W6kvuCAvyh5iWx8kNw/oIBV9ao9MBzn6lFZPzAs1IEQgJ8TaqsB9gmJQpdZqMw0X6Y+xQyNRy4VgFr54yAgJ6acQw6JXi45hLBTk3ZgXKL8WftUqRksqDh09r3cfuw3ddIzITSE662z59JwnpaF0VV8FNCpITJFlNBDVn3T/PVJPdC7SoiT5r9QTAFhODGJTPQOwf5O8G9JuBLOkEpzA8RLnEir89Qv0qg1pUBMOlcFvO8chbhGzKWY1+UFChC6eOg3f+8El31rAwF33f6PXXNhFySHmZmhdfcX5p7e8Pi+/FDGcUukSxO1Vkaki8FOYH7Vu6T44gE/cW2s3csGjpHGk/25HuRo3AZwMCBT4r1ZouEC8ZNYH1Nu/3ZJFSpe716I52hAOBLrfh8kzfXgcUW2haACm4l66QbuomA8dK5VeiuSv4AcuYCr/TAUf5ZnteLiUk9FvJlFxwgoRpwZ411sjXNLPwSc57kdnVYG48LcoX/V19ATTiFww07IWznC6MOdAo5vvngoYO1279glFLXgP6nOES7ox4FkYeu7+G1dkBwatfAmhlVXcBDQCdPKIL9m/Tx65JRo3VCVuC00MehtRBY91l9LIq3fS522XbePnaeU+aR8l6ngu6IsnyJBpO9B6qwZ71WCps7p0HVrtzxwpLH+r769nHFV1x6SUJPX5Pncdr7wuXSJELpLw8W20+qHyhRk=';const _IH='70adc55befb3dafb3240d3624af372bf6f5c280e5dcf9294dcd01fda08c8606e';let _src;

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
