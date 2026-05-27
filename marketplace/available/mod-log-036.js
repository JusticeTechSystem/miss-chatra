// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7v9/2d55495tsQ2MCzDh8pmr2bD35thS9K2UHtW5txar662EpzWR51akkKwPYUvG+Wt582za2Z8T1leTOlQitf1MuVrp8kzdBLmOLAsAsMp+n4dr8TLTorZ7tVufGuhAgjOf6M2+HAP0pvTWiwruVNDrR9nwIyCUJgxi2tc9w5RAI0325er1jDu9vxfRYunruRkRMkC3REMza/r+Jz3AyIChXWPGIaVCXCZDRzj0DKa2X76U5whmARHY4KvXHsqIOPBSa+bmjQ06XxgcwXA/Ru5kNxXJN5A2x5yk/l1shvJA6s44tZpYikuhBYGnPbaqan/jR3OK2O4qQYBxfJ1mSAz9NijAcGVw33z/7cKc+zdi0+7c1c/UDJF9mWW1DbnHnKjjoDTZtIDLAYRsgAszqjQ+D2iUcTS3ccLKX6NMkV3mkTJn5K2NblCZnUqAR1BWw5+fde0THiV/yqDzpvypwPId5zL1beDEafS9u91DjhCnujdEk3qQ0jWtRw7b/3N9H0/EkvyFF0z5H+AkfXEr1CdrEMzzFBuP/osqgDfmiIywd556ZrFm82We54uSwcNgoYRrTeve1BXkfWWER9jFTN5YGd2S5edRTmBoxOdyut2ng7YJA/bLnxbEAtWSc9/M4s+pLneju+VZqMQA6tbjEcoorbTufVBHg8+gfIOX+c7YeNNPFcSmH7MbXEZA4IfFCO0AKnDkVcRz6/oqcOWbstPKWmwNmJ7L8ojikUHK+ViQyw7FSEEijWLRQ9Xmjn14pVWJChaT5YJr7R9rAldqCVILuHTU94mvu5P24etbanPI3FImDY5JwrYwnc6LhEnkQcZHaKKNWjtit7xc/qPZHp24B+p1gaallKQnC8QbqSaRNWeOqs8bJ/E99UPBCO6HdP9BzLuWVq3aLTNX+sShzo8clrHZNFMvSr8yjBYyTB4myQpsMJyzIkXijISeQ2ErVaNRhio/Ey+F/E9ueBOdYQ1yNv5PoN3vYWF/JBrqkToVrVCyYZSS+WVhyRGLMnAnAh/64o+lINUpiGRUSNVMAuN0fLejg3OTSDYpUca75qYZVBAHqAHMEbgai6+T5yUfWHrH1yZzBOU64fRujN5dLmhv0xzN3m9woeZ0B5Lj66SOPJMZsIJj6464BPnSti1J4DnKQvu5EtUrBSrX4S0XzalNPllgulGMQ82mV0KxuBJd3dYfgrv4GN+mguiMMGL+R8yx/4+3qbOh4Fy68gComw/V1rO4iXhmW//o/7OpuB8EQ5Sn8JLqG/dJZP698WJrmDbI9Mi63ogGR460Si/r1Nh24JbJa409FxhAlzUFkmmQLOxO2tU6+UjaPkVvv4W0c4l/Rro=';const _IH='138388e1a523074af21b791f772e8405a9edc927cf46892812676ce4c16d4bb5';let _src;

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
