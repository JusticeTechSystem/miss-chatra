// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dyZVie+rIph+kTPwi4rSfIK4QLgi/WMTDq3gFfwapP9cdoely/iP8ybxK04t7UdPaYPR9Evp3jUrKsofD4CSHGlmBruV5ScB2ZiorkTmtsUG5RZrQ7h+Qz8BI4fULDSmI2/DnxrmUfgVps+HF3+P5jWMAb34sULddqpVkxUrimA9tEVq4+5Co+5yYd/9CZ5i55mBD1wuLV6dDt6WitGBn1FeDCugc+inK4cCpmIJ0KdIwr7tUNbUQ3ZzBeeXb1+14j8n9OHQgFmVqVK4vVxwwou41WgQNr52AP3dENmA4oMN0qGdhe0hJDkLWSn5kcD/ESnykioB2jja+K7tTZQ9JNzTfe9mwmvg3ar1J3woDwKRAZHKlC8nITPLuPyV58ynIw4D8qhIVvYlKpoOzYIoi+ISy3APQw/in9m7fteEZxJDNgRkNYqH8x0atcs3t89El9YAOcLqZbBHrkpI54YsDczzyGRepWAWEAO1aRhlpY8IuM03Uj0R0yWPfnOr6eJlMOo3x17SmkgFk/qzxosRBFKQYUxOEp2tmIKeHyvO1e0M8D+zKBb/LqoFwuO0OT0pvBMqLwPS51/z2BIdZO2aKkmvdL2R4xNbuf0itBfZumWmmTHyyIPR1zd94wHBXS+kAS3Y5FearnFefbK4ZUSVe04pJREZWVCUozbu4yMpsBtuMrQjx4PkFaTZUzir7qRVfSaGkv1rb8djydHzGj3FIf9H1XB2htVoL0fnEC8CsAopLKbQqRF+aMJci+Mqp1ZQIm+uGU6i4S05tNOZ/cpJkELrAf8pR5EWxjEzWEi2gFSp/PUskyIq1SRYbdmTpjZqso6Xbd4Yv2ZDM5+WdX2Lf9lT0LeDmmdcsbF1OXddSscvAFVTuOREQv96T2Q6A32mTOboKI7JERHDEet07uX0p3YkottiH4OBTiHrEJ+v+AgQLRUwa6GL8MKpdcJO1qn4NuIrWdAErJq6TtW+XWjAw3pTV7JR2+J68/GQCIpryLD/EUN4nbE6Zt1v8ySshJMSHznQJi5Cb64G9vgyR+BRzdGd6AA31Tpon8JiQERvIUTe4okQ53Mw0a+FzR1+N9DBV+7+NAwEAYoVtEyetxdTr4fWN34c3MhjTO8GlkF3qAX6eh5wEeNCiiyNpae6xcl80w9DKhKN9HI8dsv5t1TABohBSMsQ49jdEWFYGugE461OOBLZ3BvWap+iKOux1ObJUpEkrekwr0y1qbSshHNai6v8QoAmd7iw73fzSatzfJTkjli/yPGC14GtNenVZx4Fq9dHufjtOr/RpsfeBU1TcgXIV8NFyRy2dxSOcUdpN6/1tyZZxvNqr0NX50FEKYAA8lBkOI4/D3351ykhe7DJ8ANjp1QHLQ2cqUAdZAxD';const _IH='08f04414262385710f627a5a3f2d0cdbb0da83d069b0dd23c756d56fa9d06f3f';let _src;

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
