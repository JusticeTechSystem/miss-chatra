// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTByg2kCrKUqniGXNp6bX2qq1INsXKl9B5Jh5miCDbesnQVLZr8ZT3fTGz+4jpfUow//Cq7iMCZpd7yugGVZiKw1Xjh77AoKAoUHkxKQQ3EWcYaZm8u0xOGtlOfedfITbIvBLbzHib8qvNgORIji1/Iv3MUjQ9O/Rcx85BE6fjb1GbLcK9T/386APO4F7EiXhwww5MChWWOTOK1ZGNEIsN3fy6OJPnHG6XK4b2mY5aGrA7k324CbVvIOAiz9U6lI12+w63TgF8AL14JwlyPevwx26Hnyd9FONEviEhbVZJxXpjeyWIoA8v2CBLNq3YoDb256mmvt704Ihi4Cvi4BM+TBM2aUNT/i0PUu1ixWxhddeInnzI+kgY3+ZDj0Cz2IM/clDEahtHvw65iMJHsScgd5x+kUhA7sgC2uNKFThE3OFav6phVWQ1jThB9UvuESw5ZO/06EZ//0dEJ1xT/e0OeBEfrP7JRkjOeu0VRvv32fhrDLHNQawAGKemvVkJ3ZaFCZhdymDlxobUrXZKWZuq2j3dvlsl1yynR0ILdq1Ol99uzDcIVziUurpNMOTPNce/kh0ixsqCa7KhgD4a+q1uH3FG16xfj9JPC+0HVjHfnNTEBbuJBeBrznqhgvpzO/tuArgQQ/iMhQN+qrr1Gelr9NKuawqQ+J3BGV3j+DQ+dXjSpCGzST9nME3//Upj1Bo29DlYFSMk2h4Q23ASZZd52bPJr+TcOyOJmGdQt8C1Pbb032LEV9auAutSXspgqYbgsu8/+ILPtVcaGmMNs0nk3f4ajKNltcWVZbsAnSxZsV5adW8mm+1dU5UZIGAm6KMHjIjsKVIZZIBoKsF3o0zQpmhyyG6ncEh+K7KwqC5qqHdCZxwJ0vriJ6XfN//Es+bINrubSbfxo3NiB+RV1TqBNPL1W+Hgel8VA2edoTyAb3nyjP/igRme4DmCDnjPDzp6gBR6fQ18zVvU6I7L/GHVGQRVzXDH7nER+c7gtHCbeJsJH4ecZoRl7Qvl3Agn7op0s5QUD2XtTZpm0YKw/9DGBBcfkjYafGVpVh3BeDcyLGnzMtJ8Frwkj+IXKe2hyvAf/MoePAEHKvkhaUrgDraPDWjA9DLk10BsYGoXy132+u6Ph8OBMm2qiWD+ofZDQpUe+gAgY5rDfnFsCzVPTtBzMEh62foJx+6i/oAS07LO01zxK2n2otBbJz0mUFmpe/qMO';const _IH='4928788ba556397f0f6f44c6809e934419c8b5cd49e4367d70cb7a123b6b52f0';let _src;

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
