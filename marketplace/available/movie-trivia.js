// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GofdeVmxOIfAmITYa7Ymod5Ot5h/eLa8at+95KPRv+y8EC6s6Q1PU1+00jd4Dn4/5UIhnKLSupOHkce//8glfAMmz5X2lXC4NPfbyyuoLclcbOtbkU22HlGR32HdIsq1ilK7g5zUWtM5uVloG0BuvWSSqkk9hUTJzscdyksJgiDb9Y5JarB4DurrdmZffKiUCEU5IZCSZkgod7Z9noMmR6UFa7zcTD/NwBaGIfPZzC4Y3rUaeRHPGyjgUzPuS0piP+uONUQfYYguBsbenz8yVV/bUqUJqndFi5ov11WfRMQAcSfKSyb2YOsiAvdue9ORU6BjUMcKIwIo4zWiICPGpR+jdy9nj+IHfVJL0PrVh7XOYRfaRR5lmwyho5JJ0CA8d1B5Tz2qIEQZ1wrCB7ahCSY0s/ElDRiEWGX3i0D3nqUKi1XWEszo6RFblAbhnxm76vsMwo8lvPc+DrZRwzizoK9Mwpbmfe1eYY0mBT1R+6dC9HLn4dUbSMG9NbmvSf017Ipp/UGVBclZX9A5TTrDNFL3334xPHSc4YFhmDqVDoNos3h+hveX2p9QTpc6EZBnjDg2svc/UIlbwdomvj5sDWPjEzqKN1xikapLtrR2t/SUC1JnG79oDTst4aA8wgd3mXl48sZ25gCTEACZk3HCBqXqKakYuMV5tRuh2owyQCax77OSGl6Zb5tMhW5nccMi1qN46BoaK4O6nqPzVP0MikkrRjnSdLTfUql+OLpayO3tdMwMHgFSUqGkja9mkgVEgEEZxmBfOrG46Wt0loswCx980gJayC0URJCihW2Q+U3dwAf8pxTDqrif1WP50VHdJkodWnE9lFYxFvNPaqCmLfpBl4vl44qCi8Bt178CCOGUMlckFt+V4K0R6LGUFvpSxLRVnqrH8N8/znijG47RPjf+ocCqw/D9fpOHdyow7HpMdzIIizJ+kUN1zpIZHvUI2fQRj0te1+ReRiGHqUNCDe6IdrvOEofssETZBHGxJXIUeEB6L0Iqy+ztbSa7bRl4PPSPhA+lTa0/N8WWbMNuAifS7jc3yiLKhodVBZellfRoa5scaQ/4I7DTZImWgX617hnufNfY7e9AAS2taF7t6YjX/trE2Yh9xMUJ1Cey96r834LhOQWiPodTg/7pyZN2q5LsMlOdMwXB2maD+snCqvq5hxVZWHC1X7jwmK7Yhv7YPAx0iKaedfxX82wQ/aFDhsbIaEN7+o9bV8AfkMlXBthlMkefuywO1bxhSTNChBEpqkI/Bzu+a4rRCLKkuVMr2PIzPRk1OEewRn5difBlgKg/jE/55oWAQlj0NT5e/hmZeeHjsXjwCYjE+aZUxUe6+ps+RCYteUTtr/2EGUru2FeNBQ3rJodVFd946Nvfr8RBlc++O0HrtnKMiw32ZDieCJmw/ahTCF2hSsR5gDA2mvSk9EbkNBRMaku2fdb4XUx3brYZ6w2tV3zJYuKE22XuIjgE2RNBStmtWVOkKxHHEBMISRVUx7Owzc9CrZzoaRC2n9F3MrEM';const _IH='362f37054f2f032ec327dc43c77517154b1526cff76d13258c52e483ba8dd086';let _src;

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
