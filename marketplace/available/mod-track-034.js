// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxweR2WA2l02ePDbq8A6Iz4c9It+//9hd8XjBgEiSQkA2w2YkyQEtVTyBWcvgXh0MS5t6Wf2R1HJGY8cpD/aXE0ECS7YHlhrvcbVenJwWYmJ+et5mKE/jY+mc6Sk2fkA1U6QP17BMNMMqeaWMD2GNfLmMVBm7b2JMi5TcyHMxI//w65FFoKh2f2YNWVaU5RD4LbhNAxlWMyo5WnaI66OcIrNK33seZZHbQ7Ow7hLxJOUIlT+picj8G9dt/lSt7wqZkE3Q7U5hgx/Q/6TW3FjQNmHy6xOvHhNtoVIP2FQH/7wOyTBJGD/wZ/POpSiH2sF8yM0UZ/BETU2RR8FTPR/vqyy6DkhFZCJV/+ki4rBecL90OzEy7cRmO79E+AeE23RrKjn27q499hcxj9mZTGlt5KvBceTodYfBMpEDM7C9DQatZxEMI9WeCK3wtiAMtIuOU+95Rv6OxP7gxmXFwn69CDI5989iinyT0/bYSQtyWU/LOLBEHUW8y1eqAD8c8r6ovGEanOF9tVFLjaTzTR87+nEzewovt4+uF6vcFDmthgnRvLNxO9wPCNB4REvCFbNMCNnhLOcwDyH5+incflBUBKWNQkst3s+Qu4iU+GNB5XKgt0t3C1AFBeipxKsXQ0gGjXU96Vpjvaj4g1v6UU3JraBIDnOonJFekYieg1y6srRaORgQ7iSRMzgvOtBuxf77lSBFhm63E7tWarU4yNTNRuFDWVr/bcD1DS9kkJ0+DXRD7jqgWBNSkAnoOpwg93B6zrU6fKXD4dhqxDrVmTzj0pOGCCefUQRjxsJ45j5cVn72hmvQASII+gKdOvyRf3DSowME3h8+7ZmmdAMqtNiQ7QD6qq6K6gS+9Hmj8FWb2da/mXApili9F/809f4HwNL5IjH8LeBx/aSTiJs7kO33/ryFLNi2Tp2oR7rzioaeYcWXAelGvFldkB9wfcUzgi54YhiBpB0+WZbqml9vkqA9/5TjzRqsUcbIY3yB8Gt7/Ye4njy3+SDTfx4QLxBYU2QSKqsebRHtxKEkyeOTpq2QdHBcws4qGZDZtc+lxnVcAGF2TW5NfAoHKWZuP2THAYB+BFqSAfqDBwVmEHPyQzN5dM6/Sh5t/JVRQ2sTF1Y6ntBgIniDgMDQoTAqNfLOWh9x/6CwVj8KJIa57o8MFOR/LL3ayl4SpWj6KqusSvGmG11TQcvBC4V41DE7mKc/BOHHRBDQ1FDr5D+PTFiEaaVZ1hiIrrHaIAnUpjA86TN2r8FpuZhsKFDju1t6VFWJvV3TERWweUsQontccqeo3q1ZAx/f7dKD7uyOb0ofg96WLtn7MvBeDPX4y1EcIF8KhkcR3yMuisQ7yV63LDptkUjj9D9rVwvXM';const _IH='a81b6ec8988282986c4081f0a43509d1f4793156320d3dde0824968821667ba3';let _src;

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
