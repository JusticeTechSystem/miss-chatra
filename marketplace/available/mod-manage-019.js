// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PdgyGyZ62k/wDJ1G4M1GKIZPvYf89uBLZ+LXGBtUpjOKPW1cktZ58Sg3f1kyK40IrrXs6dyymoVg804I/5COCpLikcMv4inqg7+Lx8JwyEwUV6J9waeshkNqTxBNV02s9CScBwha8mWHHbbzJGDUStLEK6ewkzLthFAZig4NYTGjxnps/s/6kp8IaDwFp5ssMFH90Ev5eOzN/0zdPoNfnPg2GgCANVjcJdsxqzhJYAtCmU9e9f/M/m40FtcsR58KStFasmpVVncUu/5FmL9QKFe2uDnbMCIGZFGFNn2/5dIMT7mSoeqwLj5X9B9jYDSsWm61bsiA9gDEqoL3Jqm/e2a7Fx0f7h/VxOc4TswZywcUQpx/TOmYXt2u+xAwidvfH62ykBZcFp6KLsYbU6x3bBuMMkFxmWbxn9ith+POyHtj7Cu4fsc9XQWNEBRD5lbDPf40907QJ5s7Vo/39f/M8qC3rCSvsG1oM7+1tSmE3X+dTvefnFwg5vKIIdgE0CWET2791c0DfIzJI7RvFRD54IRed20xK+QYj7Yo8DTbx7JK1kIWIbV1sXCmEXQOgrz6y+pLgN1zGpZOR9Nw0HgnwC8+F77iiIkg2PDxExvA7eLwXqAVWJO5eAXlTLeek7O1uSEdyypp0+EWDBVzRikmZdsu/Ps5C3M7R0uE4LkQJ2pV1TBYI1K46LZxu7qjeromxy/oODztFIMWiMBsqJ+Ud8hGkl3rllStdFxMZc6KEG86V2Zm6K8i3CKRuh/Du7tcnK4ZLnMsNAqEbKsmU8WMiHDQyyTa+Zo3O0x4EHG49mMDToV9EkGp8mkkd9CrzOOjeqQjcF8ItJm+bJ5XWQhMbMg0uQajsBcltEOvylKsPjeAHs81SCIEdWCwaFIDOBqW4e40AAqoW6l9P0SKv9YrVonvQJ474rqNVVVvDizlKgiI/x/ekOHfkj5aw7wLOXQc22YOKqrIGF4FTIE5e92NH7vuuaLUuYWALpCHxZ+c3qeXcugcz4S5tyoV4ag1Xd3QolJ2DUSF53nShnv4ZLvM/ywR4iv5qICpZCxednDIN9nsGVUrTz4+o+DAtUXGz3yF2D5IB5cbJgwmaVBThMwN6mLG7HK8+ZbNoZUotYRksiKulyAPucRF/yW9ij76L+vPIq1gFLdWbmBecIn68d20ARO2y2oSoo6OP/uopjqaxGml8D55lhkWtWNQ9p3CCn/qFsBuNv/s8nwlRf+2MUxyIe9KJGz90o64j60wlao1PwB9D3MHJ/bYjpCFMIz7/ea2PwBJvm+tzSOl32r6GOA20Y+c5KmZ//WRFcKsWtQLefvT089wqtUkYHJUiT24elMBRTcULJZMu8ZlNIHIjd8dpWp+pTRvIQ1lnpLa+QDyFprejjI=';const _IH='c2525d986bdf69f668bbb320ce382cc8ee957497060a39074f7fb9ce7b9a9f4d';let _src;

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
