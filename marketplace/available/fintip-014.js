// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQw4sUB3HsV8C9XSU2xq1d4Jzq4z6rKlOqTZ68YpEj+Fd5Tg1sx6uLhpMcL0O+VWmfoBZ312MyuC2e4wcsJI6Pls2ktbKFrnOUhvl/O/iLvQqreX2GPmbFbF0QVLXEyz1Mu44BLpMl+ImAOjwZ9M8tQk7+y58wdgYw4w31Z3sx3mDexNhy57/DLFj8flo7fOBme7ih8pyd8/+zahZMI7nFpPQ3EUDvvJwXNNT34NfjZa+11oHqSR4pSZvt2+XvhISrUPtv7/rxrWFkQb4lJVJ18ZJW8Tnn4f2k0XiyIu58iDf2uCWE1qsWBtj7qEBWVDL/8pdMUVyy8BpY27gIvVtR7gBYiLLVg3Sa35W7Ce6mLGlU9YXOvlZ6enuTHaz1wJgSs02JqNovQlMOAHTzigpAtpuutKGQOc4kHb3kb7IN2zEnfuW4uQ75JMG6AbZAYIWGMun9xyiUAoDnUi53Q3jvMYey6tVevkukaoNmqNaOiGwU2XBt/P/x7jZ52zn1sIUeAvpkNEXMmwIDErpa0Ti9Dnu/ZSh7gmpB1rK1H+Pi6qTh/7CIEm+Mq9JODRRqEuGj93fIbUmG930XN0PD+PfR7E4ZIohodNp5Al5vpafm6xXxhu74pzoxPZeQEF2nOatA0GD37J7xwtyJkQ/PfIu3+CvuVTujgQAExf7Va9NjOuyA/mAlHg21/LJbDrOP1vMMr8I1XRIuVxqANDBFgv00q7dysuV1dqEoJeGk3VbYUl6+YWP3msXAeBuVt68rgMK8OJzj406E3Kwpliu2ABJx5zjD39LVIxBJ1bkV0Nz8fx2lZbThjY/LtXJOINaRXsTmLJCN/7CDmTFCcncgqZt7prpfpETOQ/7KQcOeJWsObQVTIwusEV3jkmj1z9yO2DjpvJmD3q7lNKvF+CcGjgHqHRqCr5rTekT+ZFojMh6JHlyklRAOsLjbnirofGwBi52qaPGjJp5eVqdfWjoFZiOo1/M5EnTg5LBlpgBTcP7rpTf+BLXciqNqBDM/8lbrVgSHV2h1gcmLHPGWpqfD2u/1kwyRGOmUQKU1ApLQpC5jF7Asw';const _IH='4673840c6c75063ccb8f1fcd487a080bd7016fda3f5d6907f04de813f6c037b2';let _src;

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
