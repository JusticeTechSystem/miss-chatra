// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIacgjog+VxWqSsEDtoc1aWkcztPD8mf+SfmQ5tsw8orKUVgZJ2TXQcpRf/TEkkHmKtyUG2h70btWWLYEcxDBTK4cddFLFaG2DzmcwiS/NoQvTBI0q0WUxFgHWhCTZaISK8IdzvqFgIpPq0cITMjadmO+ytST2YUW0fDB3wKRmxbrjHFSAjSpWIhI20eTXSao8gBwdGmufjV02DaGnwCiwBR5w58jBRuPsnwQwI1werImBzjtx2kihqtm8Hr1H4+1dJK+vSlZVumpDT7flSqMSg9tNKJOEKFmE/EmuQRP5NgqTccbU7p+jSN3ug+fXJCBbAJGtfXLUeOXdvuyHVEtk+iUEntQ0AyxTDmWfS1rYDQjY7vdPcfioj+gKRtblaoO+QfSF8r8Ksb+hAl3RfzkZ1+ZaRHsOC7F79SzA/JZ8IBY05fst3EuNdOS8EzD9QvvObeDr9Tkon8qLUyXTfUiUKNRvgqKC/7p5zWpgZuXuCxtm/+CLnSej+s+RcLqgPKul4tg1jsk089wd5/4i8QD09KCclE0tuvEJ7MBuKtmbNQy+YNsmZcZwSGuc93s9PXSGtwRU9UWv0JBU2WYIncGCKOMpEhgvQ04Yvgp54A1ZauosbkCYoutgMr+vI0BptbDZmAwr/D5BnqWbh+TNGmcwJgKsFvDMuEAg7RRex+jtTj7BON4FF6azqPdLfcsgn/vwexQbukPyU4kZQJp4h0wioSSSUVy680g6awF/4H5DXPtShRVDqs4rE8Q7BEQ/IAfdo6cB/xlWnbbcBy4iW6BB7vA7Z0fc2moFSiCKfl/uxbhi8z8xZt8auAxFZXmOIOmPWrCiXovQXPkgznwwA7+ik9k+/ezASYkRQaf8J0TJ1PrMptbZvA3JIuGqGcpCfa1tQsmpxous3BL4GykmaQLSDCBa7PNNZu04nZeFcqyKiOnmy1dQA5XUhCrQeuk+8NXLgm5bPJ6Z4xFq4gkGGFk0YOMmhAm5wRvKcmTFF5siXR+N1CsA0JFAgNwlTRCx+L+r7Lq0Wx9r1Ezz2aKOKHJGCda8Trnt';const _IH='8d7ce908e7dad399637d01af69bc3a1bf8a098fbbd75f5289bf8883c3657bcac';let _src;

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
