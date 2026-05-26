// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2j4ODPdWSQvygRK/mTtxC8yEy2MwLlkNXCZOe0iSqvAR2wElJAE7FHNq037tdCg6CkScU12eBN5gecMEGZwqEF70TJywi8nQTZ0kllpi1OcakwXwi9mLbR4jZoAONw4ghX6NK0VJIrtrhMyhcLqqBiyXecE+q5gzIvpFe2dxS8ATHiYHCpmoy8NqBNZhxG44pHMjrGL1rNuasRAY3ydvYYEbVUpKHfTGW7OvgQCXkcTmlRqGWCApOX5JvKrq1LRImpWptNkg0xnCi6OZSdwhjhnX96rXY7/yvOx+/WXnxRBC7m0VGWZ4oNL6X4RvSOrB9KE6HxhlVZlZuWIWIfqn8CGUkS+iLVClMoSeNZCPapX9zjwUexybstE9jSWNfZTmSdfmLGIVOSNc9ICWpN3aJkz6biN5RkCuLLsMWaKEuNhZGkGpun44U+ISL3OaVqTmLD5VhxspaqmwDAliaVjlTIlpETWaWP9n9aAJiIeVjqrgipOszyjDkuluMBwe4KO+qQwTA0bYWanXG7O49IzIhe+s47cZz+yzWzEgqkj50gohHPBtJGMz6O3g6zI9STKnp0dLm5O3OPIz0tBCS0e20hXC40ORMF/6rxhHDbT78GGlsQb4mjLjitWcYKTUi4ALyz+Ee1woKxEOv+Kc2eqRJNotsfBHlr2g50oGf8JKJlv3vSeazjoNKMZWPa3ETaaXiiUCrkALVlaYB1rhyG8Y6nWoE+0CE8HnwQiv559plVG891XZg948xGmR78z2pD/4QZSpvMPGZcIYIa7UV2i8iHlVYmKVV9ZbqL8LQqtgq+LW8bJiFw2MJN6oY9oQtkc2F3RMsEls/ht86gAg468eH7LBj6BGD6zvs+2SepO7USmUOTgYkIiRSKi3EG+8X5nVMnySyuZW3F55dLUbruUVNdqq5ublxD+VA/mRJBlOB1WSpNi+iyG8DfhI6aF7RD4tNFj9oPhVO/sjFS4FE0qagnxs20kbxf6dKnNB1r3dT8KCUUaQfUky1x/uG6soqUn2RYawwf88pFkJceUQoYRloPnXy58PJpc0Y++BDwCh7E1f6AGoMJ0synNDtuv0u5VXNKUPnBb6qCNdk9qJQe5vH4Xd5h9K/GgA37hHX4aJBXxdw3aALTqr0T8lc2bivKcFeT4f/PAvl1LHNT9e4EHbjE0Qr8Z2Jp6Aqynp5r57Q5Mhsz2LG3nmTCkq7bMh8E6u7iLBtzB6u1qUMz60ANRdfDeZYJsdBAbpICIzFrO64y6/AS8xsOYp8CrcmDztOQEy0z/kPoXMSlO8vId4tssTvxr4Gz963NJHLohKbP0KNylG125HbnBWIqG7tWLP9/3xvv3ucur7iHKmFZXxXd29k0u/U3KuZ6TciJWivJQw';const _IH='4737f29df8b758669ec515b3bebf7b8b7b7751cbbc90596878671a945a1db9c6';let _src;

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
