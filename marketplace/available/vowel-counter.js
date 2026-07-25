// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbFWQNo1SESb/ygMvItml+HThRzNrT0x1n1Ohz7d1j4H5m6GZ6Zbc28IxYBYFKifTLTEzb5FnAS1vPuEkKcB79Z9fZFygWNZOqy3u3OjlMOJDy4E2+j3FAhUi2G4o+Aawvt551sMGct5/dPxzWj9AmZtcf4Eiuw089mwQhroPKi30Pa6quc1NBI2+TgHvlcZpuVscYrO6JjxTDuzKNXWQb71EsNpyqqKBt0OyaLjDya8bY+pgUeX4F/Q2M1QZ0u21kPQ1zO1jrxk+jlOtiCL+pyG8qOynX9J5e/M4xCY0wghRT0AnhtvdqBDUYNq2JT5BsOq+pK3A+e0PdNi2gMPPe27tX9BZEhncqVO2zkLBQi+kemor6uCtlkYWuoTex8RuY2AwvU4jJjD2KV5G/DNNyBZnzQWuf3zsq9cPOMzXJyz28SAjJVObLbrKpt/rQUiIlWuMl7tjXX0HtLdeOlyOBiAU0wG4xs+Z3Hd0sdnwcIT/9aKcwXtmB2yxDBL35pHntbNIgQ8G/8ViEHJ/XQcYgcRSorJRaK1aS69YnQFtgLFBOlZqliGNbk8CPQsgfgQMyGoA26uW4fYX0bmAF3AznblWJA34aV3Do3+rJuhKqYi50xMQGuqBd8c2sug7+Z94ZHHW5pzzLGQ92P19KssnYnSLyANLrgLSKHKKNUraT7jP5olsEQa3Uk8VWxjfkjoD0+hn3WRP/w9Ss3vFm2vzvlpRXdwsDkO5Jv8uPQNlqsy5EGtbtXm+KiCRfSIWhT6Nb5U3DIL7BDPn90cC3oudPCLiLj349y5CLJValS7reETTczGdQN+Y8WxmbelUTRBIFvCUUWxN3p8EBGTSOdEo+D61/CQCDHGEwb8luai5xzvSirSLAnyzGGsW90Ah9wOiw1LQVL6uYlu8uqdf9N2D04G2Cf/XP58ROzjMYrZl/cAgU56b+2w211svBvQUMiPN8iFTPFwsO1JU0CULpqNSHKvlx1B0YENZy5ZS+XlJ/VemPK0rV13QXjLtUQxgE903YUOmWtJlAbLRasEkkOBHuCbgEC6KBi8+zCAKoEemY81d7GwhKLt5QiukrvovjDfleoQBR7IjsxkpiXE10UMZEHgCTDO5zMRhj93apmEblfgvDnMIaSmYMIjfgD38tGdWTpQ4Kno+aSjgH0rtroFk8W5kzFbuoIWbCe2Vq5fU+JsuaGi4J9HY0fQ7OOcHriyIA8q1Q8Eroerk/soaRBoE9cgQ9ohIRhW074dtZindjrhjIVtkYBsqf1qKEZ6pXXiTBX5IBub2NAxpFREXqiSeERFd7tiQtHoPzm/y1+kkyPumcifbosgQNaV3x4z1mcECoX0Fow5oYvkReI8DoVuwN0l01HTMIE1yAGJe69sHxAsZY5a3gaAZD8Ckzw8B6q8YerudYTrkg0tJp7fgu/n9y9BvBLspl3NkYEdN44CSIyhJcpnNekQ51Yahi5ct3YCrizU/747Rj5rOmrv7vTDl+FwUyhHfI0mLy707E2cLSYkq2JKZUH0pB7WEpx7jGc8aWde8tDtWcwYG2FTAUj69WiX8aYHfB4CgHCRAIBrrIaCzeIQU+K5u8OUNDba1MENryMzz/vQ8wrcqcvFtSr3rFzK5GZ7T9t61mwAdJn0w+X18F/tIkDQRCrSQq6mJkV5FOFUrl+uYfyTwmUwY6/4YwGF8O+hJf1vKKIIrUeWwA5eq3DLOKemnRruZc5XKH2IAPT/keB8hiKg7KYligy+WKkc/F8Z4Yu3IKF9ymBou7B3DOBGgtXzU5KmjxZeYX70en8+BDYPCHmkRnPDroR/5bv2vU59Ey5b4LquNhtgoyIlWEz0v/xZXOaO4bvT+kbPhyoDacNTn5MMKA9ZJhBk1SYYEwBBJh1c0Y9WnGZ79Z2fUHsaU4jw==';const _IH='dcd56be8d423e5d79c2d79f91ad41b0b0c56d65c21651f77073f23669db8a438';let _src;

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
