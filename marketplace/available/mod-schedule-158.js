// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OPR6WAyKFNvbBfjC+z6EYu/54QrYguXXMdQGBXzmeokBtv7r5IPwNbxIn+AUnkPvMYny3KnRZ8ncQBRgXYNK/P2m+4O4tihPqhGNmfaekuW1rRGhKmzij5JN/Kt+4/SZ+pW+sWtj6qvoSWHrZ7OFbin+Oo0cZTptXSqUZdFVvY9RkyP9FuWXELoFmbTnP4kWAziVrWHUQAtazZ39SqSx6rRO3WZQ5uUqfq1gZtepOpL1LOKt5JvO6166b/IeP2f0Hg6RsLFvSPgf9+7gvgJIwSUwsqFvumqh6hCpb9EQziiCAcna4ezgTxIS4UdAjgX2HDMIBldQ6Pa5MLVCfyTFetaDHvhoJ834YEVUAjp9GAV1DwFo1z6gk924vQ9AZxKne62+f0HPQhrOApEfnWjPIg4EsI6v0cCM7OZj0D+GOCXZIDTJw8sI3iMPngacdwEdrHHfrhvRooGRiMMQatn2OE4Q/G+NKZh3AZUUTUz85cDkyI62HQmewZ+z2ti4SH8dpqxnZZiKI1e7YwF45k55szkoUdW0aV9S8d+9N/5fGOLCahMITCA2X4CEtnN8PuTWXNziD7UHV7rPyVz19Q9L9MdHlqJnE+AOvKMhYW7sagY78fmzqxTVrLRQVMtZED3pJFGcacHYnWO+wsJbEqpXds9jgI5JvuupuH3sU/dCMQNvqCK9v7svCzYJmfsZGCx30YF18KIQGaq/tHzJqivT6Vp/CvuEyYIB56PG/5X9y6L4hJCdCqGeW/dbV3FurtO9XexPu6dfPnKifNtTRkLQdnLnZJoGwsHcrp4sSdnxjsqVk6mLTxLU45AhHbeWcmLng/J6jDlcGIcISjvoAMF8EW+noPRpFctpftBxPBFrGfKUjAKs12PwZPri5RxXwJZHlDUdyU6FaZ030e5krNkMvNHPOzo8LyG2ASHLd/YTSAw0tvKi2DkNheKhkwnXP4RLpuUC47hCAlBAkoLcKSDQfOJBu+AP+Il5XtF5BAA40mAa6pn6Zm552YgZ2+nMvZtSyAzv1QWId5HJapJsgrCW7+v3hPpw60GvvlCbfWBR2Mgjzl7938pCKKIVTKoqRyl7soSTk36ysc/jf9G8JDzLtgkPo4+QZU5yvqT86Uy+SsXzXk1wHQzcW4d6qa+xwGQexAv1LTIcvNJWpf7u1HG1lp1PRn4MFXNhGljvsWY34Bc0MQ3mg4/21g5xPQaP+pyTe59RU5CGY07OY1huLgu9GJ34Tt60uxw4AZ9z3NNFqr0xJZ20WWbS5ggGY86T2ZR70d9QGXNt3JGK+PNmnXi46vae313+BcgzSB99PvzTlFJ0mDHkGc7t+x/ET6vHJK47wG1C9W/P9X1Js+YqAyHqJ8LJg0s+CK53d2jkswfBb7sWMgJ+nFWdY/pe9pzQMIw2bA4CJ/eNP3X1K2Wy';const _IH='d9346e72a743c8bb8eaf27a04641d7527838a6a81b40d1bd19888865cd7fd201';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
