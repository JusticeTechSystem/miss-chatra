// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DJ8gZOG75RfObdsrf7DJQ2Gs7shJIhruITqDAeBBWgQLkp8xchuWayvFd9/MveAtM37ZhjKHijdyFQvSREO7OG+/Za0snA4H8Y3LX4qE81wq4MEIkUtqNbe93pG0/0jItz2n9ZRyLetTQEwKGKpgWuZW3bXEwmYDjNKjoHFHLq4G/MLk4MM74V0TsKt1XEAA4LWN9Gxn0x74j6SBA0QlySk1KruawF7dUGkDchi/X9tuOR/L/hBsKcJOpHxtLtEe0jIXqN+v5Bv+2lS9Zkheq89eQzVanRmYFD7KFb4HpdSqU6vO/lkK18fjVWkN1mLoSh5zg85uDt/IZbF9yLwgFHd2c/gMPaWO15Bzgnp/+2GrqQILmjIdx11YHA4PtSyIKzDoHpTd9cDco337x5ZfExD7h5tZepfxRoM7gz/cYq7HlC0MZ2gx+mauaZmRXHsMC/tDm29p14Ye1UqMNUGbWfT3ed569haylh3rsfAgk4kdt5pAyjVafHSa+ejb/lu9Y6tDGrEg22SvQnh18X6D8YUS34jmIh/6af5f0+ChCap5zz4gHSJBwFMHp9B8Va/mCpn/PoTa/DPelWXq5fypsm0rOe4LMB1Z43zJskfCkOG4v8n43uSer8aQgnkGHUisPeSzf68ULPoJ3Ze4KbdnlTApJzh74E8FppY4uwmoT1M/t2WoUR8rD1brY7pTsQUYxnObDVJsIAmo6ilRWIwZSqdHZHMaD6PytMjeX23NSJ2mUw==';const _IH='5868686ec2b572b84d11bde595c59feb2def2d69277fdbf2a797314a57cf4fd0';let _src;

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
