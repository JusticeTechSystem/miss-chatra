// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwoqsowaee8+RWvzlu/vH4ptim0UE20pb+zMcn4K+R4j6QjSMCsj932WOAo60PiTwHqWePLJDQe9z32i0gXU2ps0VpQqlSZXHBS1mPJvmFK7/JbSTd7cr+j8Of9VJuP4d7RwyzreKxCANbDOwuTDSVZfwTqnpN8IflmzQap22aC2KZqcP+KHBM3IOitkQcMZ/W6t/G+vamqRspRMcaX/rmBCHBZ2HnJovPCXSIOl+iwFW2FEejXcn1N2HuyZ2TdM0tmvw3CCk2mwO1Zfp8cPpXxmdFg1BeDP5URYN/ztZJl2trhv0V6oeUAT1yigAMtngcWM2nAJms0ciFYumv4Jhzg4hhAyX5gDKo+oxjdDxc3TmKCN1wakqpNlz9rqTOrMvmWNx5ftbdcqpJSQjy52MZDBwykvRUKjRyixdYoskSoiOqJPhmea6aU/zfCcbHlYCnA20C6J4wosu2mhms9ux+j3MTaYtPaN/8owmt+w360vKAVDx9HluJZGqKeFd4O126YyemUU4ydlyDJHFeC289bPancssfhJVPWdhVdgJftTIy/cOF+aYbP0L/+jSi4mIQvLI3cmu3t3o5dYqzRkwxTtuNF8SICd2N1LqxK8zbVknvM3CrTlY+/JTaV+Vl8HnKUtQMGJxkCn6A87nISvbXMoTQ6UWZX4BTqV2H6yUIoTZgSSsDBwNJB17Kx7C37X42pZy3+cp0BewOghydyJZsow3PM9arvE4ELfYYroqvq4HDqd18FVlJHV1jsYiCMkwdR90dSJIDEjCX4scmg0N5tAMdkyfN7kElq/yL2K045z/46EKRojw+21vVKGR43nLqh3CACqHAr9K2Y6nrU/z0lhh1GeUaQPMUgVmb0+0rUUc4sWYz8yxgSSwjsQCBvd6YB4ePekfQOkdM13nwF5wds4tDSXDj22/PhLiq7WF8blt4igY+BAXRDXXCj5dkaYMcoDloXEu/90tIL6QlE2pYNPosiUad+XbmI7mS52+ppoPtMTXmKav/xUGC6XWPA4+YHeBo4Z6jilgUVpDm/ozUUEQF51GmQJORI9kiIZzQ5q4wXgTM2MG2cbOPJAwDC7v/EipCS6QgzBg3ow/Xc5jZeQAsu/j+dbRupMIVMZbxIZGKkD6UpY6QTuDN/lq0vgcXmCB/vBbxnLqx+rUizveXDvNd/WjEHOWYycDYgnKN60pINqtTnQbIMTqz6B0EYvEYV2RAknX+HAA4eHW69Faqt2JYzszn6VL5ctgYR2rF5kSgcjXkQza6E0A9/os8zA63MLN7QjOxcJ9du7VnzGZhix7HsWEc8mkRWY2DqCdBGFvnBrrO9VKxyOa0L1HfdP/ZpM7rJiCRMKWbTW2kE2nXhrNycJNuqcSxJ3c=';const _IH='eeda8471bdd6c5cc65dcb46e8ba65198574d4612660992131b566bdbe6c3fe36';let _src;

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
