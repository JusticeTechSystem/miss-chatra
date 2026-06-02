// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bt5nki6OGqAC8bj4p+YvFV5yV5oeaaCfeobwIzCGDvaVR50pv7YlxmYCL72Joa8SIB1D0dy3nG9sAfGKk00Gr0F56BvRJ2R8d+EKwNnSuvvD5MtN6wUlME6jXHJTgubqK2yNZr5SfTIDK2TjOkoqKWFtxqcH7jgWlyTaFH2Ob+mvKMTkcA7yxfoCIahkXDwL89ghlxy5Vkt4f1zljokhItpME4kctnutlmWCc/a32uAtQUWas6atI3Scmk2pCz8I/Z0C8AuPHYTSZQ+Q+Nbj38nopsLmVxQFYKgZ0pb1PfpqDRR5g2rv4hMkq6Pq38RisdINcTlSAz9nId7HWGTAgRosJ0HoelSq+fPK4p5rcryes5yV0Ki1GtCSkK0vUtG1DZmJBhAr9SB5xOBftedltHMu6D4gP6SVnPw8VMHR9T0zR1TMUzyx5mj+UH6n3XaADdv7Kot6Wh9m27NBTuk6J1GVOnut1puZIVHFjjcsqdpJLaeAXOrHBhqWIKocXElbvRWR9wnMO5RPV9dlKyBpZjSR0ENng+YAzcoNwphra+Z8hYSVBhYABtaMjLNLqxQglzdGfvGI2GrrHBNBWqRZ4xedxcAS/w2ywF0zDSY2flrwfRFcYHnQd+PijIxhq+hLVbeT9RgYOXWqHyeOxOyKdROp7U/qsXpIsnikZNfbHdKtqxqxFyZf5brWeSHgYfPwLlbAobHyh+TN8bAHnzWMMNAzORIv/3erawiR94PLKCp8tl/4Ei9Lp8DcO07oZ6fCIs1MQg5Qy7DkC+is+DlnYfr5YDmU+1mxDM/UYbfMSpwj2xo73MUlpACih0DdGur4bFkLbtpvnEYxCFWCaWkfCcE8DjS1PjCNKwhhQfd6bpU84ngFUcfCJRzAU8IELdnOU8DBnltYNmyws3y2B713hkqK8pap0lPbGkqdKMi3L4akgUV3RoP1Z32YcsAVUM5T/UftttWI5nVl2lpX1aL7+ore8flYSRadQoPuuEit4th+n6iqUKk38kzSnSN/R4NfMyaZWolSR4J5Yh4X9FbmF7/oHAGaWbaV2xVUlQAoc6RV1uP+/w5AD+LRAF27rGhCoY4ZjDxTSSnqs2KyqIWjiwPHr0GxkN7llJsHSHV4c3EwjDP9YcDxOSKmjGb4VvzrmP7OGMSVkxVgWAt+oDS36hW8O9KcToYx5oSISM9AbOEMzLa4AgZCHBkjZMUlEJCm';const _IH='c1abe2bd697f334c2b1f4868777092b59d36c41604d9946c4e9d6f6dcfab5e16';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
