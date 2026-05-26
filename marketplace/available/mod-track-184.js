// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RNRVvJmgqlGqnU36cYcZS21/GlD3JgBEvfWGC6sDVKKc5EEIx8hxL/KD+BiKDh8Y1rkHMSZUT13qrSsC30skZMaZ4VjgAEG1eqM4i8Lih7xyki/h0jOC6vkD910zl3EDMC3/FNoQcCyFdNjncqsomnhPhlwD9qmfeH60Xax7jH7wEmcdnlqdPJHpEOqAhhrRJQP3RD+vBAMTi9HrSq2yx1/DEMxDwkdToCOlLx5kII6jhlBoB/FyJkh9l2dpkai0PbEEC0vufgp8COdSoYibzCRjUKriKbLZGkkfNIrXRcea2pEeAIIlYN79P/UIJs1E+sddq8PbMbZnvwfs6yOE+3OSuhDfGt4XtB+8Pj0tDXqmyJS/4cypIsNSbojUmLTfVGPl3IaMgyS5vuj/+5rnyQoIzS4LUzzpRHT2MyQpG+UPEzEB9l+iKqiikANwI3um9Ev06S+kFMRb0DzosrfCp/jhngoTnZhe3LXhi84UBhilYJ63Yqrg63IBDB9XiKTSoV/5wACgR6eFdyuPbx/7ZNAYS5m06KEWk+Q6fzeueDr3I6Rr6xi12UufgYEKRfkuPBbnU0W5El+hdpglB8nFuqhvs5oSKloZX9Fqz/sXcjQz9bxTdQ/RrrNI4iJqBAQ42DgOOzBZ92LrciWP7ztfmID+qzfd1CnzeDwcTyiQDA0RSvAaFpAE20sKvNoUMZ0BgEtX0oQFh57WIk9wTjINVS0a54G5Fg+RhgmyE0gYQhoTHOWUy6gp2wiORACeY+2fEsUS0CUPjnxBjXVES/vl0hhRkm9FOUNXtr5yQvp/S55v9nmor8HdT1UtDKwKhnfmgBkpmmR9CxEvasHZlxHGaDuOC7qSwKrgeWR+SHm8O8+1dKFhfifTo1J4wdDOtF/D5YcvvZmlK6RYDZ5rK4wDDepPPMOUC3fJ2gUwUj5mjcJ3MbssrSsyLd6XkpnCp55eu5IOSMCOqP7uciYaVAwcjEnzG1TIMG35CPEc5kslXgWdluC5wcVgfEeHvzpN2mrl6NDtLKjUWd+9e/3kUEO4xX7wmu0lh7KgbLi49S+8tBHokE9Km3Z8mgpWXneboxnAs07lH39kdekPKtQ6iQ10lM9XLPL9R3NroT1fTE+Qjr8RBddLHBAvo4uZ/y6H7YcSG7pRv3bKAA96qlmD/7cjaRMG0vpJMhxxpfnm8KS1OQGuWEqiKs9GtI4y0ncjhJmHkdoy5vMMGzHv+EV1B4qby1vwESs7kZ5rygwg/pqShXI3p6MRbpmlG9Qa7J/BmQh9Td88ieidGzAB2vf9RX3KiDztbBlYyu5rgz34KbFXiRreLPMKYS/C9Ah7Qp5ugbc2bHbXjn0i6lhRlNFCna2h5QH/ZQTpluP2ISFVqVQf';const _IH='f5e59f3acd6119a7e737389ba33b7ba79dae5e63b8712939fba920b6aa162d03';let _src;

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
