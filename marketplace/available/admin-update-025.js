// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4aNxVgHP/2zinkSA/sdMQqErsLsv4XyZjd+JFyBu5UsYfHcHiKv4JgDMT6ubgYBZt9qVh3fR7llkmlXsjVlRY6brsI1JvGIX6FLQj1/wckBxeGjBLnGWwcTt01usJDDsyaiHJboDgCiR4NFRRi49M1z6fZgtAWxcdhozT02tI+5z/HAK0FgoJVhk4+UUznXYc4/GHYgu8EXfjDRzJYi5PJ8zIU8j8k0xaKEvINa/Mrs0ckvga3gXfEDIfZAJBYdXt0n3z07B/y7QarMgPr8QmeaI8ySZCWk5iv1o1upw85He6gWkblMfsEW6hZEUlXkrbi3RTFjirbZF8YBXxp7Jp7G4eSp9D/4fO/7L1KGTvN7TUSuUetDwf5kfOeqxDifvgvpbvNAV9WguO+P2c85nE44HMlJo2r7mUKs3KRTl82Aa71RfeThiksXPhjG+2abOfVS0YGGE786Be7okWlDLTHcNBbDDaBZKxfx1xzlUJtT2Kl+7FhuWdRewYqMgOVmvmmVMRK2tyz9YVn7vwUxVsD5ot+aZ0CeYG/YwI0w9DCyBbW//e7E/+xxyteDvE9B/TuzMou2XXHUdEMGn52p9HjITv9CnUr+1tdnrBio/2q76xJiKelDkiunk3Lb0YG418c70Bwl5VEY6vG95lD/pIqjh8QFA1G0lRS5nY+HgbuIjJEc9sp3YAGAummmbuXMESXln04qAz3l9zUKMiP2ZPFM7ta/xqS1a8joRCXz+MoNbLxHvWFyRZfGTztbFm7WNxbW88K5h4HjNbxiwMERlZZIFwTBZmognrB/fumoZPteCPbae2LLE5QMbGsTpmz+K04ub+roBQasTbUgeGlJJERForjCnsDxtoJIf2zAKhcJcbFZVVE6TdWDMSOFg4BwbSK/kDPFUA8EAZ/AY6hpALbUV4abttymUKHN5wl/GppqRcF2LnA2xfPrGzY+xPi+cPnGTvW4Jsa4NvlYv/YgNN66LRWA60fzhk2pEtOTM0Z9QyPMj1K/TK5ErFVRA';const _IH='b693236f2cdb922c47b5fc239682935c132317216369d4044c4487341516f98e';let _src;

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
