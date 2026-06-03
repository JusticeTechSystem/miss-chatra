// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='diCzACyWDw8lPU+MGWvuyB3K810TEdL0tfRCq9tfaNch+89rEk0vsnUC1VHBrq52eghxjvLk5crx+BEYhpA3lM2QU8VVfLS7SK/FcM3r3h5WRveNU1duA3XWAPP27uWQViNKkajmKLT/5iToL4zWvU05D2IflO7tQ55YUf65ZcZg+Ck7jvcHxmyX9efTQUj6KL8K6AQiHAd0s/dBSMDITv/aXiNpkLTFegfc3pVs4NxUwQ3Ecs7gYpP4R9S10+/JXcfcJGIMLqu7z1cw08ztBYuJbrgrzPjYR6b3+e+BMiTiVd5OfjsnPSSM+wzEQG9woq4XfFQK1JOUGP7kY9VzkYHNFPHmfQjEH8dXgiBJHvCqWPNApqmnrIWVc5F8SlIh2PkIGfrZml0Ehv/z4643JV9vRLOZi7eCEEtIKWTM0ej8eUCp2d79ugHI61nNxvMnVI0nulYNgY0eMp7BHhbDhNWoLEZfh+K0J2nj0URG1gltKOVi8uPfscA4GmXACsgxoJ2z0dxSofv0WYzTviEL3rBo6ooZ/tqCZ863NG8KeZ1iBnMk4jh1AkyfBUuwVOrSZ7/aDg0O9mk/EFq59Pn1U/aq4lt5gp3NTWvwPllIJwU03l+PNpEcV7t4hLGoHrOB3Rgea0Z9A5QR74h/8aKwz5RTtW7b8skkodJA+bKZfllOB8PRlOQKgJ+UXTGBgn3xg7GmP+l7hPtjL7mZYZKt7mYOXqrzmt5NKtPGT0wZXSeyqJKT6OTFyp4HVEcz3fHZA8C2zh1XDkx8MgKUeEqDz/NM6tjAasxZp4/JpGJrS1AxiVnyYhIcgEWf/qhMai1UP3zdZZFL++ZtZMEebkFwNRUHpS5eOLh/ZHq+7jIntVde35cYIE74npfHfZTzkqfoOb/HdtVSNyUR9+vFWdnHtetYpHD+b4c8WCdc29Id9AApxagj17tHOSZsG88CH3M1yc+ZWDkOYTuTP9Fo5AGDoXptxbBtm3QXG9ukkxwSdagkvHKoVvvjmmNYUv5Pq5aqneWYDHEHw0Eh787Lzal+kbdxgSV+6UAHvc6o8DUE78voQoKickJJGhkCPyNEOxa+WqSDuoVn6X/5gVNaXQ6KR8AXFoQGp6RJz38iKRVuKfJokBJK8cO4bJ9/dRf6FTNf9q3EfyZ+9mTmaw/HCDJl23YXwj7RciNGSPfZVqjeBBVHXiLfJe4p7UejCpb1GjbSC/pSoAj5h04JctHISB3h/FboLjaxHImQRHHZ6r6YORAjfCPnKoLUtc/IQE6J+gIW+4QZgkD9x3VRzuOigtcE6DlYWc4xlFnK+1nutvL4H8fGd4GVcQNPIHVEGJj6WkjR2h54lOQkWOZGEiaXXTceqS7b2CeNjFZulBxKFmqvJciDo0EpdInnU8IzbdZTeLXD0VUehODDJz6OGBsMAFYTv7vgxvkq2EA=';const _IH='a6492a7e538a4f866e6f57d22d4f395e30df53c68a4830edbe5da003e27c3713';let _src;

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
