// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yuwcybaD7UaQxAwsXIOODQng1GnydMmYG2/JdD2K8Duq7tx1Igi+WAZZlsV8j77MPOoFFt63NEif+IHPUxgqZBa4LfbQI8t1u72n85Jgxzt/eNNOy3joOcPclyYc11QtaTluxMLgt2M4+ddf3WRlc1Yg91+NJQmvgJGLfan57BzXzhLlwpQFtY6uhoNmo/TiLoV7tuTS32/SZqwPioVfCEstJqhCSpfyP5YxVIWwlliXcUfHcr2Vv6JM9CGvZUi5P+omNIJsJDYlu86+M1Dj2gfcKaqqpN/20HgJuBGWRuP+idKutXrH+351BK61J6zYwMfEVoDfQMJ7RmOl/MNav1IkULaY9in5M6npWYtQ9hKAb517xUc57TyjLcfHKCGnHRXiO3naD1n7j1Pz0ah3mLgLiCBJRUZmJXpjyf8sJUQuoVcWeCRrok2tKiqLO3dJl1KVA/+tz8q+TOwn9ZcsmnvaJzPTZ66qv2HgymlsIIiXai/zYiXvCgahOPFt1jgjwEfUDW86mw5gYrkfT1GraO8/AUgnaTPmhvQHlmQ9L9sCmXogr27DXfyYIev7gV58HnqMPn4trN2ChOqNhF4n1LlFTCUUVr8Mt084vUhMmqx4PhnclrHZJQbOImBIEtl+3Pd0j4O0iN5syhpdssXkqosdtr5KslwKQeRPExUVcF0OEB/XVmBayJT7dds73+m31peSYGArTsUZ5T0dOjZGToZ9XjFUT7y4GxmtMVQtU9NTfJfZ+sO51aVI/FQaTfcpv5KpQgYWi2Hjgq6ge6yIqBl09CmSfkyrx7K8RBbCwu8k4gQPQYyRMRx1l1QbZutuvBEw8g1Bm4WiAgULq3Y5SUvT+gbX77pFIi8uBpSm14Iiz7vjruMTqi0oCG22WQTLtWjzlSf8N+GA45wFdgZW6nBX7Lc54JznJdlGZ0vwRoSf/TYQmVGGRIbnsHRuJlnPVw50gyft+KlA4KqbwCJ0xhLzSuuVSWddPkNaVfFdTnYl47vvYv//0SFMrje23n/hMN/4qXZj2aXSLOfkIXvDjUtypulECsfMz0NDQd7YALSTyCA6x0iIF8PYUvOZ/qYxsP4cDrMeW1PcvjtCU4KY5yDqckLEG2TmwSomtXh5gRdvZigpvDuH/iAxlv3ISd34WYh+kwrhVr+bCECpzzjI9S+uLXP5YA+3PQTOyuo1HC5HVeGB/WHWJpnsYp2Y7qYFclLjRnmpPnq9HgQK8k1ZcxtTfTxYFQuIGm5mL/p0neKgdXyBZzH8mUidop5+dzcs7cF3+56FktN8Wy95lSYO41bJaKDJ3n6qYk31cCkXYjRCrsDkRfmb1B1De+GU15113StVdqgndtfq';const _IH='37ae4794825772362ded912595a13ee05788489d8afc111a3e1172d06f4b8a53';let _src;

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
