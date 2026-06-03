// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vok/pgppakbmRfsBFiJUZtxGr1HZDzzHsWpOtYTpyofpshItqkacY9Nk+hBokZcMITNfUWWG/yXpnU1zgGbv09V9SVmf7hu4k7Uokc7q+1L/1jDgmkuQewKVUia/c7aAHPYQO61R+oJkc8n87vjcIg5+g0acVrcNrCcv2UaEt8nwYpdKZYaXMDaa9cumQ5PFcZ6t/FZnKIoxelS5dhSxJlDzktwrRkoWmLE+EwzP6v8kFX83WWcTgyjuOpdsoGxqivEF7iiYr/3yIz7328yM8jIze7pCeJwkEmYj48pNg088ejMjvnwS8ZV5tbuO7IfSeCirnFdbX6lj+WEkyj/l7e1hp6+yT1cRnykrrHDZtBrrQqqeOokvC93Pf8ep4kLHMd2ezCAinzSz1vhbevjb62FWHp1wp80Pl3t0JlyS66LIImY2HAN4C/IMH+TnbcBrkvJU6pgKpVpQKefB9ZxdhkvxNcWxTaco7ltYpFicSw4VbV6NzMpX8mRZT1VF4YzjEuAzbu0COvNwusE3NyIGv/3Ifxl5kq0hI4wpPA1V4fQ4yqSx5ZNmnfS8bjk7HMoVkVQhdHze/ORnvoT+ri5QUtRp2EwPp9+OnhUYchs86u46D0j1lq+oBRmwCJ1GaL9kmRJuHOcNxYOzbCGpCiayEDA3cdpqdmE4bh5zCcZZyHoAmFevWgyqMT3Ahw5Epl5D0tVNLwp14Aoh58LUQJiB7cIAK/rV2b+boagFA2dLl+CRiCJ7SsD/aSSaRd2th8q4tnT3WS7xx68rN6KAL3Izjl7guIUBgabht+Itc2F2AtP+1OrBEacj/PAwbBZ03+YOJ9XV3Pv+sDai6e3TkzgTVoqA5PolmZ5ChSlX8IPn3YheOY+HomopDN8Vc7EEQUIC/mquPnuzAS/tQvzjN6Cj2+GkcJYOj+ZAWJ0qXe8aUZwJ+qTON8JiyFTSZTo26cpi/0+IKRu+VRy66EM+qz0KvaUwwor5Ecesp+fK4GkvGonVgmGxjoKj7MeZTBOcjsgubUyKa9MsiOUnGQ1tK3OCzEc4LvhqMmoT1n7svcprJu2vgpEc+VK3CZnJaMiXajFMRSWxQ/IObnPJo1M0Vgluzzw0ov0VC73veiE/josGlOPNonVTW/+nWQKTrUy8dP1PJBW/By+VqeECbNAFcfPoMlyOBuBxe1/nGMjctyC5FfIxMMYmlBWrK7TzkmtecZCySRXMtbolktIP/EeDFOfx61TOJR/NKaN6YaoqMKUGIaOLd7FGEgQfv+zGshLRF76yjziyBULwATAlQ+Qn+spTX8PDi47vFqpEfCnA0jpcOOh9mgnYqSoKcC+jNQCyjdy6+3sxbfUioWrT2fBUFw6T1mgdLG9VxeEV56pIpMPt1pw/o2kZ9r1OGw==';const _IH='5f939b1e7efca861001fb6221113c6f21ac3a035438e711bfeed54a97d1223e1';let _src;

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
