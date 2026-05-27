// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4W1whrj6d34/Icgd0VZVs+tN40IOiveQpLo7yPq4FuthcyFo5SiwXEqr5ysGCfuVJ2GmvoWGMIO8WoNEdsIDoNzYnzLNEOIsEppj5D8Ej7VHhoSFXUM5KSnL962d7uvBxpuv/FfWb3m4wLvp/5XnmWM4J+TDGSKiyqOaLpFomPFZW7BqC9P0cMBivAK4D6Saq6fcWQjnn2GBdIHCHwBVz8OWNXJM7Vh4xIX4emXpaEALJ9c6hhjZ+VUUYNlOe9CS4oFQwjK5w9Pu5pJIURrtrOb8d1P+mJyX+Ss4CyzLTin0iQbd08Wg0H3UHpihHD+1tMJ9ud2sAxIoBxZrrMd0IDg8UDNKn/o1NgMBCOVrK1tyup8LAWO+Hx1bgBriuPcHHHwRZfmhNEAo38oErd9JY6yBCYwk10s9K0eauVANg4KxyYhs/69/ZHsNLIEKrg66ORVA46sVx6gl2F7XyWja+X++2aRmjhoPgS5TE2XPNpSB3wvI/rU6pXezxc/uLRvlYR8nlX0/CG94P80R+YodiOJrK35pvBIXrFNWiBtnVKFuRKRjbfmWrJakpm/CYXN7Ta49OYRnv3EOjKy6O0ccfRTNwkr0kM6sIAE74b3SBRal8QyyTnF8KuCM4vrfkeySMVAFeY8ZPd4L2WvZ00XGOkC+eirLxOVlic3h6GTY4KzxmGaZkz4e88u1qKsu8O3W6c2wK2LASlRQLGzWoXE9GhYLOY6SgPvl7Xqb1sQOmfsbUOzpN21VvHxyLRHnDqJj/FizYNw5qyHyZ58UgdkZ569X0DXMc7Kuvuz2QHBJtcNCmuFhCfuRAdjsICBoMmInjlNNnPy2pXFxobEWZwNmwE3pVTTbAHoSl7SGi4nFEgpVsGVOOtMMF8od5TN87gkALOJNwVJ5gq5l6oOUKgn5qwjWB9Dgja200Z0rLlJk352/xNFwvt2Bf3bSoE7cwXO1I4bEq3a1mFE6gLwGFBtfTHMc+KBSO1M5U3GPvojRjqRC0UP74HV3XmkShSUED4Wh3VhzCMsBxqvWvhxFOwNj+igCc/5Z+iaNPYmfwoekZtf16rVd2eBYHZ19vgxfpX/dUtUsHYcb1+vrYg7t50ZZrW62kISmdzXjUFfTGtqvPDO3MQskX0T8r1mgpQgNImJaAl3FGR9A2TTJkZxAhwn1ovIJ5VBL0cOerM0ac/kY61qj+mB0SVHHxwMUaMiQkC5Yg0sFFDrlXVKq+WxmMbWiG+LDtowGzAmuVkN0mbxVE40GUwTm92DE2zFNwvN7+9Gdw8iCk4eQHQxnobyrkTwr4sEW1T9Ue9AEGPyjdERxySBOL3/vVlb/WZxs8Tx3soX27ZoVsJweapsmaUUbwLzgMOlJ9XMyWKoP3jBLjJ64E/arYIOkB/cKPHVm9E8KQ8n/8TKfAvy3YgFtC9iFnPWktFlQQPdetbteRAw7QFwGurI9Cly1P8sQ5hTZTdQCioxvrcWW94oALdS8nglej/poqTjvjIWhErUNjBo9dBlRmw==';const _IH='3f7ea101b8470e57b87630f467416a8e7df5d250e1c287cfcc13d4a7e0400c53';let _src;

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
