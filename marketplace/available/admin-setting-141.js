// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rV9zoY21TwxACUegZXey1ZHx/rRr+FjTGwVzMc851ZIS448RxVUJATMggz1ELXSIaaWpogn0CE2LW2YkYEARKfbY78yjRDVdfNYbUoVfmspzBBeiPPiJGYS13UGYL4SW8IG7yqu4RZXXoGgTpaA3Z+yadIt5F1pKF7eiCjFJTX2UrORW60eWBBFa0uQR/pLlBubHlGySQlhrxoxxlC90SOcmr3ommCKnK3bcXKEqIQAwaaH+m10ll5fGApSxvB/90UPIMNBgSrJuWWQvo4i90dTpy3xa+QnKNT6WukbQh8dWPL33wDs6TeOJf0nzO7wCmdjxJvARpazc+ghR4RmBFnw0DqCrvmXH6U+xqQMHWPzdiLulneqdhIT2FWyiEjqL/LjB7U5Ck1Mout0OF4dP7mStdm9sKxEHFII7xvDhSFm0L5RkbtzNpC5udU1Cb65rriKVFkVNe+8r53eB2ZoXEObqVpZHdulfjpEMxKSrpdx2J7XwVMHnR+K3VILKci1D/rLfri2fBDoi8E2sL0hnscl9nZ4qwIt0xQgU9Q1ivd9MF5csoD9EHs3J7kMmYqBXuyXM57Uj+kAeTWo+XvM5mTib8eAYgSZ6R9jo7QU1vNdcrr6meUuK2bLpmb5gAh55XQMD2RQ5bRao6BaElX2zSLLwLIdnMjIgwm/gF4zNjCzzXbKpRoBcI07UxpYZ321ro/BMDMIeDjsC+Vr2DcdlQHdVileEQFfH2WamU3wTfLcFIfl44mBNjdMTCjL4tRX5611osTtAlVMdAOkTBKp1MmXFdfVMpBA9K2QamatZMF/GNgek+XFjiaOljkIRyt5eXvpD7aJjet46z4cEAzQbYnyG7ggeD1NeR3solfCENgh8qj9qS1Ri9Yc/OicB3yIwdOBsyQNqpF2efLQnJAC2VA+NaYhxGfVmTTJp0b1Pozzytd7NlYDSMEZFKkuLWQluOPcrdNT8y0NdMoVkz3i1OMzylBEFFYZYE0I2QFMuXXxxOUrkK6zOm9etUkTQrnQ/5xzoew71x3w=';const _IH='377e8399c8dfabf3e4e4cae88f1a30b61430b667516ebfd2048b34513292fbe8';let _src;

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
