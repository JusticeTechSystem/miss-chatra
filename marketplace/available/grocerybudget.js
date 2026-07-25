// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0QMD4VPXPS0wFWBBToMGG3r8WB2Ci3/dmhtMuZnkBrECIFTzbVOGaNcI8xrgs+Fpm2C0e7jr1qMUDy/awNOUhtmd5RkjSB1inqN9KiYpjIAQF1xZVqlpFzmihWo/kqDzlWZsgLAvsCzhWWVW0tNT95hwBUZiSQWmPe14o//4tRAe6zi30oCPkovP0NYn98Rh6jFDnTtS9+GhebbFLy5Zf4gcwoq7sxvmuK5TJcr21vOe23ZZnkH2cZApLF5PIP74q1Xz6c1At3SuB76bDS7G/Y4Z9HBg7cO8XNKaxwm+8GA/vLr9P6Mk3C+qH+h/OWq2HPYez3GzL+mQKr+To9K3/7mXrH7EDt8Sxm2bNSqwOgBDA1pRmBLjgGzM5GVp+2cv6gjiZnClSl1BdVapfmY520VHRYc/nA8LJ1dZ4djuipo7TNbZzQRDtcRPWamQMNDjVXf48dfMw7pnNf+Cz/ZmGGHmO0lFWbn1jQpogThrZhXVvzjjSNEgKQ1L3vNrE/5hCHsFaB5V278TfihjPK5VEtwvdxh6VcHFHtAtldx9304nPZEJXk6/zHQVqzMbXTK/sBLe3y7+jGpA3TfnBNPDQL7HNMO6QnO06IYU73DoBtoNWuT+1VHdzGSyVbgijyJK9ISlOHlxGWdcIWhW4EA3SFh8NN6aZp/L18zQVimHnqVqw5t2JqhXTV4VnQW/7oH4g6NYOisVpO1LrzIyGwsymTN3MWC3DATdYoaerrxUBCbE1Bxg3B3OPiPiEZaPGfKBcmdB5XpGY2nCS8jzBTzPSkDhFlhVxSbbrUJbRzwCNl6B/8AhYKI1SgP8eYnwARofgpU+fsZB0qG8V6KL02NWfuuBFP2aeBjSM39zcPCO+6YygcNM0hIgfAmmUKAtljJSlfxE7lFwq51VjDvNY7mjmVLpANfkUXhOUo+Ra2Tj7VHdQ6/32j58zvBHeQpMjmUeG0WxOXVwWV/a6DDE6IDp2rVD9CM37CEasC2Ud4viR9pfW9xaqYh83I0TEd/Bwu/TAXAnjTnvDNjgRRKK+CY0HIv5PxIa0q2gLrDa39oKtJJtBlr8Ov4MyyjRJZSZKJIov6MSYkIO4/rTvd26jAAKEL/NYR/aQl/wRHdgIQNHEFEypKmbRC74upmRBXTuL8PikoD4pVeFuKwo7jFnE47/BRWr5kMJEOvgexrcSe0s7DngJD//MIszx5pLHD8hhAKC8sEm4UXkQwjs1';const _IH='a35c381ff3837b8b9fb65838a4dd78e4717defcd1797783d806ab88e8292640f';let _src;

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
