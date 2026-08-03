// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqVQwpO64B6n/Dkpa9uO8WF6DEORZEpABq29Iq690FPiHIp5qDzNhL3XUNq4eSWW9cFSs1L+ITvXrUmHM7Ah3tNw3RT/QE6TiII5KmobOuweMnC5t/sFUa4Uw5VuiW8VApdsO6ChtcVc0a76q/K66R1AscDY0dApcurDP9RaHWogR8NOYXaVYQlKqTWr8lzbEl+mTMVf5TrwCfq1kz5dMWQrPo8L1Ob73YZHP69urCBSik43fcCfwNWAEIDleus3c8AfMY+EZbm20qtUq7Svb1kJIqFphfGk/kgqX3F/KMvNaOqqapy3rtV7EoHBkVzCEYHqOlgner1Pn8lfVhLzGkZm29rYDesf/myK662uR61xcjRXmbaQMEw+0PyeYxxAi3Y20cFxVbXMd1u4UhD6uZcMsgVwengJ9FiiNxCucF9i8YCLVG5vOkDtz2fA/w4VI6cY3oRu7uAn3S7Ujsgfr55aHrNu1S5FkTYymweoy+F/lP1WmGwzFJA9odgpCfx0PNmwHwfEePXUBIG2avEC1xlQBYzSRvF8x9PTMONFjQfqid+1mENeGr400v3CeQd7n9STDmOmMxIGvimp5FDS7pmxM0oTKvCMHmEztT+mlZkDa3j/VSN3JAqtcYScvjhrwMW03bL41gwDaogqcrgrmt4socYcXp8QTIkyI9m8negEi3UVg3ng2XCwDnTD0i4kgOgIPyicK/ivgbledvXEVrrzIgngS+S56/zT/fvyNQ322rvZM0HImJM7AuFSWGHrYztNlPVCDox9eZWF2Moq0ORm/zwTvreBisYY62BRQdX4SEjBEN5SY79+7+RBhjArKByW0ryeSHaJFQBlFgAijuGZtBj953W3QDVItAMAhOogoPSoKfrY62TGl1O20nGaw6g/lQvaMPYBZTGYYBWNVjttTsAFf0W96LSJcjQXXBHLUumcj4Nh+qMvD0ak/cqm0UB8jFC8QL2kqw0ynCkfMCciY0heodTbalCldfnOgVzWnpZcU=';const _IH='f712aee8775fc873403018915d1641da5996584291271b6520a42de1f75c0881';let _src;

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
