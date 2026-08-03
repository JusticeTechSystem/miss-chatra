// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdW6TeQG1fweLFze09ZNHvtTmL6MPeb/zHNfsmkWVqBXJ20J9LpTZ+HlIxBgfHw94B2GnS7OB588yFgYeEC06Zws7fL+m3GxaSE4DYCUfq8PFiZ5gRLm2sBt6an6fjE1JsYETwwxlXpZQZA4X+V00Wk+SYVpaxcGIr66CkKCqwE2CF6LyzNJAosLcBigF0e/nR7p04IKBLpoHA8rIu2+e7NuVYxdJ85RyU3QHAUb7Ldv1QRhYAYBUk6GLerP/UjJ2qZk97/prBQtO7VA2J0BSGVEEDguNP+DQ5K7cssBTyAhyJHFGoFlZzaL1oJInjJrGNmCxuUknJgtBvUhP8388QAMyHlNNwPfyNzqXpnvqXOV9ANZ3+dCgBRlPt2tg21DaIrDrpr4aBCRFdxmGqMGnHwtooAroIfAOBc12uIF/+uIl7ZHbkpgQz5Qw7oK2toA95lFdhdb3zJtezU9+FAhsLyuKjbw0sZlanABKExVBUiuu7kaR9gnkUc4uE7yEHUPEAceQ8ateauxXA0/Ctsz1fZDDklB/SeF7wYy+uNYE3NC6yYGQtfpaurx/7Dv0pD2zSlnyobhmv/FeTowBpB08peBSoNoSZku4F3T+YhCWuRklsLt4sRAqXwzWItcClnzYBgQixFLtCLnO7pusWhR/+naBs4qwvgnifKavLdj8xch9eeoN1oIzmHf42P8zBfVO47L+PVxdO+DhixZyUgD8plp2Vqvgafy07lswK9D4rVBk9MGbRZBoCuMkzfxoqZp30wJoqu0LpmfmZthGcGnM8XCP0qGAuIGBA2wg2DWW20fHyadX2tCT49vSl3+/771b0Ocsz2yyDab7TWloDFF/e4DMFC+87W/CJSW/9RX/3Ve2vgTcmlkKr3udp5yfcdy1fKE1NjZVx6g42Mt9ovoZStMq8doli99mdtt5Hq6RJSaW1u8w8UJDeRoqW64jMyAY+sraD3Kd3xvGN6lBC5VCIvnMXdBy4d/nBlbYfps8ioAfXXNdvt+1Me1u395/IBIZGkhawbaezxb4FECzXal1ssW9gdLeMK1NN8NU1gck4LK5jD8SwJsS+BDjGNhYUUwlp6RT+NknwkdIJ0B7O2pX8If8b4Nk2Sj6EKCfDULEWRRqXIPNj9cAI/0MlHdhni2D+28zywCsNhvI8tBZ9VIZ6q9cF8pK5Pl1f9EE42VQ76eE7ICYbEwjRR6ZaGlOchEDkRIqbGLDltA==';const _IH='d2c19d8a0978113a8712caa19fc02c9d43e326ce178b749c98d8e9e4fde5c1e1';let _src;

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
