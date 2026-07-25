// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYr5yZIRBgBDW2Vmk7tXEZq4FFJ1qNJcLcZe1Jb0hD9gFmZzFQOGTaQSX0RXlhiy4E3v3JUb9/ZwlWJwlh4oBuunGJib0D0UY0PvaNVLYNrnRFwCk+T0IYzRVTZzD97okI6L9rsjNWqO6Lh09o5e59HdwZMAb0TruIQsGaUhnp/GUUL8xudYlOPN7XciTQiyCBIf9M7zzNHYiqXFWYRsT5BhmImrUAFRMOze3PlIh5kWr+vfaxxdTJmZsAz0D/TCnpmvNNOoEl5hyuZuob3uZtKLc1liDt2rdj4b4IXmo42HjkNnMql9yVaoxh0a/AmbFXuZQ1byasvnHlQh7qMRXOQ84l42NfDRW7x+J19VbT0zMYVjORyQfTqCsmPXyAc/wJl2BtbLwC6nlNJvW7+kgFGpDsz3Qn7D6OXZPKc57q9JfyZDy58hjamsn90W1Blyerh8ap9k2pEP2GZGMt6JHAzUpg3lUvKZn65uf4wS9J08MlF7ssVdFFmCeA2H6oFZhioJKLXVtscHzdmCtwumKX+Vv4Xpn4GQDrNS68ZKEmnCLAlcGux8WToIVZ1map8+oOAGRey787u08K3300qHPCSUAAWCp3Vs3R+yrXXAbVfab5kqMC1Jx86UxjI1llcPZ2mxCH57P+jg55i07AShPqmbHdVixCV3K4RaMFyILNTGLtvd102agUanDBnCKVRa4y7Ryi/M/MNHgEqz60IFbIFK4v+IaexsluvYwdFWKD1Ob9cIl/HaYLuDm6bq9E+4M8vGI+ixly6iYXdz5l0BpLh9EQmhyjkNHPIP66O+5FKwCfn0EHZWZ/MH9NjvwNneeUmGgbZr/M+D3pUnSrd7fMHWyUT0huWaTZ7io3ogzfmxD7lVNLBltYsyt1ZDeWMdigjcjDv4dQ9QZYM8U8PdlFwtM5GrjUG3mtOKh+ghnd3LGnuBHGSkcWavUJ9b9JjVstmRHAgH5Y/TGS83pbVuD/kUDLcE9PoeY=';const _IH='bbffd925de16ebb34d9a72321fccdc60b0ff6361e12f88f4a4af220e4b149046';let _src;

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
