// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gEj1I36NRPDIK8sPZ5xr9rXZHCjaRs4QyZ8OfJcYkPmHvEow9SfHRuherAsflCc9qs8GNnxnvRvoPQKAgQunDZ5U1kVM0W84KVRWq/yNvOLWR5H1c1zrFJgl0QaiK/dTmlDe+3xvCLMge9i5WlirNv6fgi5tYaQVB8V5OQH1dodEg57PJmJTEuI5NQEcOsil2YfCxX+tfzbxymPyO1Lf3yo46Q3tcB0yt7fvxwkTtogLUB3qK+os36FQdpUiGNUf7pxd48WZX0YjlWbsNnfsJ76eX7AwBez3MhS3xfGkcml1c8yGOZqOs+HlGp1X7S/uEwK4YnvydJoMasayeKptgrAW0WWmBmP6H3rjjoa72/fsieodEszolwIUZdw8JQgJi7EkfFNMjFmgvrVb8S4BB4c7awx5Q9K2toP2Kdu1ckfoJLOtnKKak0Iwu8FFPdQe83SsgFLgGEEA0NCxARcwIxs116ulyME9T9zHXvrjfIGU9l/dHtUiu2gOenzn2RisbWI/eHTBoDHZVOYG/NBaGv+Hzp7dRRFoBzj8Zg//+bfrnF5QxgH67Q8k4Gkoec2VbbFMos13nqrwjOnYpxDE1BDJwN/dy4YBe4c8kMfbkQpnMUhiY6ePTi4eMcEns/enS37FE/894mV233AmxTvjzkoWjHFbFJj3G8s7BF6I9hDmp5oJjn2dDlFcC7H4RjzAlIg6wmLVLz6j2ef9qQFCnAZI/ni0+AE=';const _IH='9e6544677ac61d0ae14cd187723570e30849de0a548c2974329841172d2833cd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
