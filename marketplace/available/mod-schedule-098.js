// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwzkjMTgBbztQwgzkQvPPipIr3BOVc2JHQGNhiWYebVXXT7T02Z/2Q/n6FxMDe90Lg7UfEG5uoCgsl1ifZ+Z6dAFzFtl3cwaGUCGjn/gEhBCU+rj0VWF1wARUW+bm2yLAdneoA0raDD5t+q1o67pxPgBjknF5loShhUdBRMUyDsWPT9RHKtiowTq6FKO3PjuTB7XVTKw+fS4KQTSvxbyQ4nYhZgG28bTT6Ay7SZbyzUocn2XhA9w0eVAJe8+XuPNVII5BMhi7YpHgUiWawLTfpsvNAclyqYh4JChqpvTuP9k/DMBkNSBw01D0QrXCSWfztOH7j14C7KsPmwos9HIpHQeEkfTUsUi+DeCA/63/E1roHp1eYskyEboCRdAqLIglXAQTmV3T4eCaBBgoA4mzk+EJCmkeXoNyRt6gXBPncla3OFsSOrshYfPtjNpq8k/E/mpYgJVbt2YCWqWrbtv6kcyKBWcF8T8wHb287Ii+PF57m5u+dzMPwn5XTMBPO8qjaRWxu7Xufpc3TqMWaA0IpiO+Z95eO3RoQW/BTokpl6ui5LaEK2bTmLE2DXm8l3pOJxIXPiBxJXpYQ+/IRh7FPyrTJkR5rje19shdRsWD7eRODREh8gnKeIHaRfHSQoe3Z6ErlxMyDF4kGhjF98qQOq7P8V3ECwmUWzX7Zmk2L8Hx3y01LUYzeAjehDLiPWULM/eDEjqiRDJcUIABFc6Ihm6VFuJk48g5iqaioBJV9RKtSQkmOvhd/i2Tio3AxudpUYqLDp/KkVMXopAXPLsiFZLuP0ryq4DEzHhpVcHsp1ZTzSeC/BGq44FLjpTc98ziXkYuFKYZXGMqe3+L3WKMHnAm6In4kiNgpwoihKXHRkz+l3GCCcK0xL7P6JIIifYYGgqDa5eXJBuOhowpjWzJGh2cM0V5yAR5FrDW6IxDtGAuJIKluz/0SPjLZhti0e4+vPJiVCLl/vNtDGVSWQz/bbEgoTwZqVn5fXIcy0wOn3fSEYZ2sfWQRcjEnTRCPXytiOl8bqMSg7k8sIDhTz0fJfvl20Ci7UlewCrsiRRYUPy4xgcwnIgV4BwrnNnXXXeFOD+LM2a85MEgJ90noDF8lhtva9qH/xNucjvR35Vm0SxxeYyG3wh3e0o2229S74aFQsPwa6gMBXHEMcE3gQrdkRyk94pZfqh/IfnO4HUJMIbUUo2Uy7cXt9UZZO9HPgUQoRkdCkBAYnu/BC3+SpOKocNXwLVjbsqEkQbENb22WaCdL+w6WwRj4VYqCNf+35y/qnKrzJos2Uk6LFM0oFFrNYd8lgyayIiOyaV9wG45OoLTSSU8qd8y3Fw1Te5N/OfGFvxzagCoz70DTRIOwL7DpUJ0I3BAyIlkGI9Bqxmr1g+U6YT2xi5j7JffzdkRlaTEFP4JmT5Ri';const _IH='9ff8dbfcb13bb31f919fb8c46a6630d01d09ca20c9bd175cf9d4c880e3ad5fe8';let _src;

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
