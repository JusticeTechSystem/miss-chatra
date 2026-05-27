// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e8PcWd/K26dLPyBpAHOmwQtKa7TlV2p82AoyV/zW1kAe/psyxkdEjoJcDFOO5LhQW+D91zCJStIX5sqAjO+cDgZ7+pr08HOvj+e6fEsfjEx28H19uRMwjXfvct3uDE8PpU3vz83jfKr+wwT44njy31n+gAGdAJGR6q8Uz/ly5B9cwMLgdeLSrOwI2LrD2EQzQiFBIL0Y6cCnkEPXepIiHAeONxewr3LTtdOzXJuUvttoXVEpzEuw1i3reoQ5UlNgkk7oVtIT88Zs+75SvP6DQpF38PeeuxclzPm8Uoh9O//ok9Imi4p/qTxwHVO5ycL1q4imU1FMjUYqPEBe2bg6ES+qkCs9I7HBKLbRZHzS0X4jpFFOdjBsY7wu4SY8l46FjxwNwAK7RMG8K9jsto10cOxQ/mZKcJpfRcq943X8dKS6T3yCTVLlw0f2whaq8jvjl6h//gXc4hZFimPCPnrpjwEKcxVWBCBefEbBuJsF6pdSFHjs9edo9tvTZNy8z3Ju94ljjwN9FAXWlCZnryURneJtqifckQaMnkZ/4/N/o3LRP3+fICfvzgPkAQr8lDml45Dy+PTn1CRCwV5Ex/Qgwsku8kNsSDGlwAGFl3peSIEjJXroNaxSmImNo1Y9N1aWxvkGgKBbnxFgLGsS4718ofo/tLmAFb4JQ6A15HjwpyjFVbbH1LRmu6wOZkM+bhDf2QsthCKMpWkbO9xamWmAv6q8alUu5OWnFobtJvKUBxWbKAV0iChMHN1V6mEE/VZ3SSt8uKsbcPDM+mTWk/O571mIFsGHEtEepb5nGigYzkMtzkfd7KqSrK/Dur9JfBe/wKFC8VCT4opzbjfRtpIGarr3RdMYXwJewanwoai1IJt3lXQW1QyPy21ur3QxioQyxrn7+WkXRIyFl/SGv0QL+NuUzqCv4OowxCofUf4OIBRz4UC0smorllHhoc+h2la1MLKynvhK7LG07TtJ8ud5ETd8Dxtgp0MJWsuu3lpPAHZU9B4KpaIJ4DI3/st73H++VHmFhxddunHXx9QPwNAabg6fckOhHIp1p71jiuqizlJo8adWbdH1HkFNpiaAgCFAVUaEuPW32osdNEgqyFo4EuzxvkxLAeAdMR0nDaW0M9gF1AsKcmcioErykUTY019EXFoKBqc0rlEWWoRfaSsHZxGFe36oZAfd8F6q17mRDkcqXBq5olHKbG15l+pIjyDxTg==';const _IH='daabe7e850fc783c4a56302ec2e7c360ee8b4fa560404fac305b48aae6a26473';let _src;

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
