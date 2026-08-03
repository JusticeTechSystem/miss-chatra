// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmmb2sHpzJtCJzNjIGd689HBbI4k2VMgSaKbbNIpSI2GsukBj13hzhpHGVQ2spPG4f5RdQ/OjFFHOM9DiZnwmrdIVt9VBFuLWdx0IbMhMC3/vZAuk5MsoCp+Cv/GD0mCYGQcOAHkN11QhKLKIea6NnHKQwlG4c1zSNI/q2UW0JJiTIN2Jdg38D0rorhatAsws2u4rN+udCPUbcCR8zP80OFuV11QqBEkwVX5wYo5tt/M+KfGAdMq0l/qsNcgTgqX0H/38KBXzVrFft27rasT1HSWulKkhwp9+ShbZYl7HYtYW8b4qRFftYulmuK/iVMR0aFz6CS5kwb4mZX+01hdFdD1Y3kqonGmnWvD1sFsggOcVG0DuctjbdXpPmKyHJkk8nqPflksIgbt0MbK5sUs1eIF3jpJz8GPMNxC9+ufGAsCxF4C0xHpMkBK6wpY8rRQiaGGF2Ua+FulEykzMJ34d6HdqSHHRPLqY27BLkcoJzymZXdKzDWZ/Awc01obnX1uVVhHWDypc6aIifspXaMxDoDjIhqewbAszySVG2DCGRUox1+O3IaqzRkStzSm4g1oIm+tKkZh0tzNWyedjT4BtfX2fuOgqj0dxR+DY/jk1Z48dFOsjVT3YDuu3lJ+CxGVVTtSAPhrUvoKBZ6fyRheVo03ouAVEOBZD3pdPzbu381jcfc8IfZizIkTyzMh6AO/nMuGio9H8StdRkE2oCky7npkA81n4MnDfyVj8+5y4KpERixOeVIDS6TvtB9/Akty00eXTjpsuaDM9Kk0MnZVFNGlpBaBNz9HTe/p673WlOv7aeckgKAbvL1D27ZjVdVuXgRHrhGvhws1ShuJhHY7kBG8BNd8JhjFsXPeBiuxFIsxqZ7JRC5W4ff+IaNqQpCKOUcMziKXGQVveSah5Y6Db7R0oWwK2pPMGDQkifzIsX2gs+M4LaLf1xrbSQPr7K55xtSccNpVBKu1dM5T+uOti0her5t90KO1tbbCMDXhRqUcoHzfotG76O4+hCOon+blQGs8WgqafWzuCqMhRL9SOcyw5UMtu3zWKKqfAbCmRqclwK15HISJmFGfP1jQkXvjNDmYApd7MPlnkXajib12g6hPi5Yg4dXs2EeFAwCmYAHt5GzIU4bHi2fNTRCGIVbAKnUHkMseglsO5H7PPhxP4SqBUZBoEWLtfJkzzPZvk+CsOieitmQZi2d6Y3k+Z1Uzos/UeIwbjQphLfZQ+njOyo+Pw+BpP+GUXMR8Egr9BGV0RW65+K3lmt8w+Ar0i1iIg4PMOrTBHx9/4z5Qaa5/DTRooT5SJJqGpj769IaqtBFKNPPufhTaCtYEVYW1L+vXPunrh9M6NAsEmzujdk8Hwz+hbk+9qSWpgz8Z/Q7ZRvXzR7nuHO';const _IH='22a630518705f9f32178c8dd0453bffb711dc19959f69890bcfd7082eef043d5';let _src;

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
