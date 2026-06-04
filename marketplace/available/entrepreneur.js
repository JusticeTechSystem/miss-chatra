// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8meANKJot3S9HBAq/mSapTvjEBJfBZ1kFN1dd7T4CfxQwhajfRoBgt0F07TsWvsWhUj8uI6GJDHuh1YRD1yGK/OiyjrEXAVO/UAwwwrukapf7VqSNLvNerUwjenI3Fn+PnI25nDJfcrB1kbBlOU4rglmnk7iyANGugQZnxIbgVRUh5ZKSM4PFxSkjW9la8Wr35JxAx569Q3fg/pKj3CjpZZq+KdLfrWXtz1W6QJJ+/034daoA7kqf0XRzps+aHHHBP7TnXPwg4ddks61PhWPH9bkN2BQ7T78CI7nj4PIZUU9Xwcz/uBtcriMO/n2pesPfOAIqMluRLsc1ig5969QmBu2mORQh2/g3cE8tzDBru1OHOY4FSGS5yDwnEn5KkXRfdVKpMY1P7CEHJ7Dr396WHjGnZDYo0ik/Lian/xKtQLU0m6YQf8Z9vgHVEbhlrlLEZN8qjb9FCV8QT6hD7/GpEeGulDp7l+eYpnJmKUEWtqrNCguhpQjkPgKjiDHpEGXhHN2R/y4eeFrS5xsXJMEOlOhrTef7QnswEik92d1V/DgP7k3TtOMzTQJPMnr2FcQ0TwsHSHvH+kOdafxu1x3TbL8L/bWQiz9cAtY43j9QuIxw+4lFnB0gqebAaoZeWCds21EyAL7+Ve1WJW82iZ5ZZ8KjsjNvlZ6GiJukVtDZTnyvNNVeJED0mjlnO4URTwlIXZ83oHRgt46Z8YF5ab2sTz+p1sXijmMEYSaA414nQmcq8Tc2Vw76YI5EK3fHfhLDY423OtFyisl3l7rCrHVOcQ+jniB0KuBLZjLeHLvCsUleOqvJgCOdULje2ZXi2Mew2jfXc/fUmLO4VQjx4CGBwbxXBQneucB+A/LNJYPqDsfVYHG6VceOsHVvRBW+kqbpEMIvL5PNdPubS5gQPpYCL6Dvr9UClfW61OV8rC9mRP54KRLIibD/irJsAcCmDtjN82Bh+L1EBUKj+/ruv1NH6l6YvQM02eFI5s2kL3cdUk0fMmi1UAXrM5HHj+nljynHK3AjvX2U4Fl7Srk5KQs7AcQT6OoFfH2AbtuxCCWg58bsOP89RCuGpXe4poFq3ZcF7csoQokdqj2ISaWTGR7NQHhL44oDejOFiBuN3HAzZGwx7AoyikiJBy9Untgr6ped/WJH/CAiTXZ7Ok62OV7LqUGBq3A0eyo/QmhQHYLkq37WHLkLAwjq2kN34+dJyXuz/aiD389zU=';const _IH='5a74e6c9baf83f331456d9f7dcefb1a44e5380183420ea9d74e4d33a581aa087';let _src;

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
