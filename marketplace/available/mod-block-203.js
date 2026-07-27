// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvtYT/+QmZHP32mRdsh+5QJE4mm7TPSATjyn7rZFSeVd430k1r6Chrj2ZXNl9WpnqU8aKt2YGgbx6fgQUTdVJCCTvhcGgTIX94Gb/feHT8mI3sm274Dd3rxGNIQlzUNEo+j3cZ0B+2KJXZnTXbv6OuzLFqxansBISrJOqJ4M+a4yHIKH/oQtD5D+F/HAiJvbGiQ360v0LvrKArk7Xo660iC7UltlxVTO9yh3rVnObg0+HBQT3JC+WKmausTA4GH/GxCaxgEb1iDgrHTZus2Mcdgr+s+Rjhpo/ZbOak3sfyJp6p9L7iZR1WzEr7O9QBsjvGzPgeQjTmMvBbzxAzojlCSVY6JoxUKwN5pgf3PDpG/wsEOr/NgWQAW1cZ5nj2wUD5DCgbtncZxE7Iy602yWPEoA9A5POFa6+TsLZVNj7zgZxcRqpb+IuimxbTRGAZRxztgR7p1GITk9uofLrXY9zCxPaPAG8wDQxAKne66fWbRMMt9/qhjUWq+cmT2B+DXOf7f5NxYllaC6VCwQy76P+L94kipCXDJafgBU1UO9ouPbE83K6CptKadkcbn2iyc723ssljQoJReOL/9IXaTdpHJDpEm34smjcoeblyrSAEeGdE8KL4ogJHXKTYU9mSF5WMtttkBDcOaElncOA2LYRMacAtWJ/r9qWz6TGSwLbEnTsvW6wuBV11s4lwEZh2FZnvSt/+sf4Kc2EWmS46lp+RTFxpg1umRlbv4bABOmHfkKESN7xAkYJJx2RvKNanvk5ccN67Ibe49cK6MgR2RQ7300M6uZgRS1yvUBSogZE3iWdtaS8nvBBmxlmmz8bQEn3c8wK9cONcWLQ4m8jGC7EtBEBvqSNH2y8lGNeBAk+VqL8OuZOrJQ/8gYBXZI+0vH1MklY/3o5v5nP0GwMfCzgX18PjcHjZCh6XcOqDOYMsOa303vAd7r4Zy4XU+lRdKxkHa9mU8PzeRdFmV3uwkLTjaV92rfmro8ola8gcN+CiID46wo0TvUwDcdNx5J3x1JihEaTWXdC2w85ChgWjLED3ghg6sGPSNO2KXnGzco4Na11e8AzNEm9ZEk+vTwUdUTzwtLQMyJ2S3G+JgmX7DCyRTXcO8gtSShVseKcN1pheFEb85YXtYMmKFI6I4AP9inViH2MayguHomd79w2PSB7VJytIryy3HxNP8eqRWLiKsdGAmaDgtjd3JTGfjF9c2ToUofHclQl1RV/NWMKQ4CCdWX4Ms5NCbY27LJrHU3eR2Gv74ahPJ/ro4Ta32Im2SJFY4CS7DB+3zcBZ0BOkWs/snYAxorZ/eQhv7ZF4aySdMuxpGNwiNKq/3HcKHtYO9GbVTRNBdBUdLpcIVn9/NjYBL8hEPCMBSX8eEetfgdI=';const _IH='fbcfcd7bb10e791b2f17b1d8ac6bcb8c2f5f6641ecf38f09a61a101bb32e7d65';let _src;

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
