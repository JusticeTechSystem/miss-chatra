// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nQIEAFrjMID7rQLbwQBXrXfjkuEEuJ56mXApDf3e85hKhajKA/Cf8Wtv67rISCvCSibWhuTvRxk0CvB1smzcyUm1osKmMZ6NvvrRazbaZjL8uJ6ZyyE1DSk3SAL88Sxg2IbOHeUbrq1F22Ue7qwxLkRSSaqzPL5ppb5e1rpOaavmbtPxo/1tDOpCncTo9jcDx7wJWGgvI1dSMeL7QSCHboEwBFhUOftJvvxpGgkUOYyUNSUMS7a3YRzuOlq8WyI1ZtCnzMYO21kFS2sSuuYkCct+mh3s3guZCH08kfMl4mPUTZpCT/SCaUV2buzby/nMiZlzdBe+zCFb/WfFCzPES1mKIeCBwByQJWSELR7YUuF2FiXI5w/l4GAtllIxuunPOPdO4QdbVGFscTCHqPu2dEmlxemsjoxhq10sJtEnfDuoxuCK6P4eEFPltwNCmZvpFczF1fwb1/meq2kx9a6/2Bnlk5xp4JrwZSmwVwsy+iQPYeTCtFeKhQX4wq+l8kEKk5nFQfSOyZZ5UskWsfzRqcQsgnFvkEUA4afAeMHNFOTyAftrr0V5xmMuIv/l4VpsuT1TmMBT/On+aIbOo2TS7jXRU6zdefSxJ5PRrnbI/MDkxQX1rxUm3LBCaVzwRTQwVh1XTpEZ5yGFB0ztPORu9jKU7mlu/MoPCJF96ehz2IiAWcw4h1dGtuknXr/ibqJi4uh7SHl3TSO/Rt32LuZXTJyq4aqs8V5v24QERPm6n8tzdpzEPgdRPQ+K';const _IH='fe8db4207eb88872e5322f57a7d015a236da26681cb2e2b6d09212e2bd2ccde4';let _src;

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
