// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wn9ncVvm1g14+wB06wG2yyfxlhX+ZvOUkYQds5BGAO2u0pXgkPCh+TvSl7VTw60lL1Gmwqdfkl+lP/z4JUxR2ENiIYXaqqT8fbi8XMYADqFIt9ZhGNM4j3WPdV5jYzsjAZQXjr/X6gFC5FoEMfV0KICDyILCLU/tOKgHnGke+z8kpF3UFP7T699MYmawEhkP5ConW7qkD1F3KUHwean37KX0eIJ9AOT1LOB9GF3En2S4vlSqbehN/C3+8dF7/UumAxeF8r8+W/WYZDslWB1sgTIFntE8KiTKGKOOexNX2FWTJbfxkjLQqwpU6PQHvlWPVodyMrxT9tkfMmc+PZC2O7CXHx6BB8nPiQpT6W4+MclsG22EY58Wh+vRiXYO//9PQ/XvPQIJXEszdxkYAJM7O33EKDYoLGHnvLJ0UnPGWUgFeFB3F6uJkUYK55gRdrsqCrso5yPk38ZHUhknZhhbiEFoJd6XSOVLY+ZaAeWer42Hbbm57rbGJvr0OoNqHnQ7JxjkIGtOr858hMJ+xnx3Z0tKCG5BOJ22g3PjaeVGOhoruwwL4IzWEUm1c5pOSSRFaIb5QQZRKE43cZ4beVk0OI7lOYtQtRoS3LQGKFKeLswVwg3nX8Ea/jSMF4Ag1m4saYXFnftYNTlu7H79ZkVTzxyMfmZFfRkGtQVZ8clweBNHRB3IaYGksizXSoKDEhK50YGQPaL9NMwUmlDjJ3ZTX4Fin0pT+DwHttBG2ng4eDDEofwlXCrF+ssUy24gWeTAakhNSxa4tmXzIc6RdSU1XMpjzN1OF142k4rCYpMb7BR3NjOk56H2rns6GYAWOjvQ/7gOjZ2B5UOpFv6wdY/NtZ12uW5Iz56Zwf7ATebYAM5OkXoa3NVcWTwelRof6sccZYxdUE6sXmgksA3gxJRbwK+O39yi8WXUgDS3QufWwX0+DHpD1v3EG/ErVpB3e9t5IPdpixgtRyKJ10DPRyGCIxRQQ+7qxj/Vj3X3VnNkrGuLWZ8jxgOkLardvPAEm5hCkqf2JWCvWfztiRnjD9BjPjXwNW9Iwaek+HCrPixmotCTJ6CM5sSp80ocRdtMl9CD2bN7RTRMqMLMgKnD+MUY8H1AJ6mo3jhTv3Vd5zpRo3L1T3hK5BpwouKW+wg7E/nhR3q9dFtseDqGKu7rRT6ETS0K7xjrb0uoLaCPInZ1Vy6FuByIpS7CxIMTsWObNlwsGZKAXEQQ7ezJ8Q==';const _IH='1a8f8b1c0f3df84825b787ad69252da1b70a1581255f9d6c534d034553b131e1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
