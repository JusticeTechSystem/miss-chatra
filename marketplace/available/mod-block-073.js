// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/1B7JZW9iSXFJB8wdSv82VOEtyoVd+tD6AFN75MulvB76lf/cZ5HbDLLRLF82JMJXDBLKR1cP7c0VON9gk2gK7fAYazHBCOC+tAqMe0JRDq4NPEitNLpXqMuyLZtNIWWtftnnLvjl5bpCrZo3PpZC8m1juHfbbGMsGoVGTll7aQ61PoDSma1ZVKzw7YQ57BTW/foDL0vME1R4ScQhr2jQf76Gw0t5JPRjS0rpT01iy6MBKkOqz5oPcs1wwkJ1cLaEpuzcDjz9p3dHraT8oV8GGHzfDq8sOIlcuz/zY7Uw/RIjVaDVJnQ2/0soc2xq7aRja6NA/4EG/04K9xdNAEiEP+cFGnyYvodUF8XHF8ax19fqekvH85Wmc0RkDF9IkKgXAXfLmgvNFLqUD3nRHrGUC47AUmJaEOZnS9ua4RcqG72nx9WrYMAx3ynrX+ajHPsAlOB6Z5HWI2wS7y7mAlX70kykpQFr+zF8N8gbNckvliyusEdqDgVugEES3uo+8nQsFGKIG+sE13J3lvgx+8CyRpnK4jEl77kTIiatcanscht3RrhpqwWLGmp3R111wqiVD+C6v4fbGm5aiy5a+QrVJ8mfm23jGdHrPoR6arWEgvqW9p63QjeobVw1qc0lC/i5jtk8ejAtBqnRMKHSTV3Lp02Nlwo+YoSQdLilCTh74oUq+ezn3FzWujmaeVnnlr/JMb+SjeB3G4svS4FwzFbi+R5VWgUiAltQ5QnPpEfyIy0FPucltqnVw7LyH6khEev0cJac3f+qv5M9u+pDSUf06in34Q7h1m8fVieldUTmEAqHWAg624VutkL6AsDFC8UZmI+mggWWAMOeQNt9v92Lf/2bA0Brp8MPJh9b4RI2rBSkhF9+7+hvje/Ax/StCPDKVx8k0CR1pnG9EPWjSwbG5IYETL4Fo92jkt7SgqsZXc4BiCasEp3Do1Hw9zcFStk5IBEjiBxbDGdAX4G0rJCB769pTL6Wt6ovRwQgNCgwiJrOtohDOTye7oojuk5PII/z301+Ro77tZ35OaQTnhAWG13wIkdcJanTFtYVcLII4RGh3TH/MRRArx0XJD3z6u7xULbjvqKM/RJXScVCfJbSN9e8lAHutKs+HhVIEtfwvgf2xjdO3d/wrofoGDJ7drdMTr5AhdZ/aHZUYsUX7BoEpw54Aq56Y+cndUfH9aLCqx0WYer4sRftBnNHD6gMGeXfJcTCT76WybwBvxxWCC1EPXdozjUGS6BKi3XBYyKJSHFucdKbSZBbvmM57RDHdW9lvJh4VtfQuAmbvn2zhGpiR0bhJJhFnLyYEkUhQYaCsJieJnf2TpCzgkvA+gGOZJpQB9Wwdedcoe0S8vyA11ZpV5siSRXw/598Q==';const _IH='a1abd8832dbd79821d7be98f1b7079f9305825ab9759f2a49d6e07e8722d4adc';let _src;

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
