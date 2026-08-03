// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+9PKBydsLCenFbYvNhQ9fndChJ6RXATENgwZwZ9kh6aVv9xPGykSzhW2lQe7UCKH12zTRWlnXQzF3rT4J0KY6UrbXI9KXTm1XvasgQXO+ocofNpjCVdwaUIWMq7cLkW9LbfvK48O3YdaIYTq4p7AzcF3S+4tzwLqw8dgps4ErRMaRGBe2KSg/4CTEOym3vkLat0rsnmLLAyQL6YrlRwhlmutx1mVQuax3OJmHUmvFJd/KIly8xwbIxe87k/v2JWq2Rk9GI52rhlM5fIrZZZ8GKlADphBy0dz0ujavE96qGQ1sRPemQSdxmroimFtW1gIaVzK2CDDB3HHZ476+CDndFHlGCBM/wU7U0BYZpjj5Es2S8JklEtZ75pjaL1Ff68JxPYth0pQm0r3YBmlvp5BfyvuFDMX5+2cTqLlM+Givv2yBJypNPjoLucsb32Un8YleA93I6Sj+2sGUx4VywPTjCygr5Ez/2N1b3ZZ54Ny/9tIzsaqACbGCLVCIfpKzjIWe0WJtU6K4I00Gy2QGvHz807pcxxW4719Z7DyamjTYGoUZ79LP8dvbbKkNr0k+9hCerKE0OPkCcLoeUN1F+P8naaF+yq7yvmO65Q38NAAH21csVaoBftpLf/bc2HteihYtDJET+bz5pPpbm13n9lSTmLYpaNMwOmOiFVSUMNX+IAN8m+UPBPnnEdgsPS4A17zhqL0NovNklT6ciHjb7fNq23H8ekqRPwB50AhXB7/XnCKqhfMZjKrLxxLJBjvpo6NaV/y+g48dtebO/5XVonR9SpsFIALQbX7H5VBTGx3sw7dWcQXw6FarqsBH4RCrmcNEJudoy+fsQ9r3TtKZBC8s6MpwVflZ/9AALpGGeHzsBohwUoqyqXT+CKgVoPf4vj5XAl2B6+lZ64z3DDtztdupfdgbkfNqpLKdgBcXCIwGPGuf1mPnw3j3YH0+HtiLl6TmKtkr7WBncTKObQTrBwpNJGhaVSD8gBfjIr9nusGo8vm59HzeK1S0kWtFwwvLVRyPg6K6oKjxzsZWmIS7gAK59pw2bT9UvfOEwPB/z2Vuvt/v6uPI/PAoEZdgy/YVWRiXMMdzT6w64Pa0AgE9oOx64VUTpYnV2gJTDqTKMfzhY1tPYHXTKzAgAPtY+q7F1HPg2fAIW5AACOv8qJ+X3JcKn5QJgeCc/6VxIOn1qBTn/0W4FVLV7FvhDquXeT0r04zzR9MPJPZJk3LGO9wKll/yPQrL1ptNks88py6CXqC+OvbURpUqzm418spxV/s3exfZ11AzO+E0CHBRsU/PFqBkk32X7/vKRg8rGo71SwsVP7BTyczRrvfGtWYQIBKLAOmQUrb9WGTA70hGV3dCvBkHVTgVXZbwAc+UINkUv5wyrb8KQr5zSO9mh8NQ1sMXyhQcZXxrgnzZ3kQqk/0NLn9UGbCrexJ2edPDLhrr/WPva3Qe689H48AXj/mB6viosLbGAPNFDSy3F0IBUCkUtSJHf+ir/oun3hQybTjOy91kK73IN3er3jagNTtgIO9ryz7Qfjy8FVP+7bVXG1x7NWRdkxy1HJTsKgnlC3fvh5eRYgz3MGpYW3t5gcOkLzcTrnLKPKUtYJWSlfgIQh4/bgbaNzhzlEC2LU1G8G1uWWF+rkFDm8Xc0dOr7eBau2UeX7aENjDsoL+XcDiBmyrHIx3u/yxsv7VtATC5bwZq6F2WHtCxTaepLt4yCrE7OoAoX3l8mMmkT3dX9CuEEjEO5h2D8YdMi4uZ44M4VrgyX2d0ca2Ekca3un8mYkca2cCuHmz89bzo1Eu9FW4d6mnEQt1tD/FuTtUY9LV7YesHFibOMajyRIHJ0m4=';const _IH='d3d6e7197470a7b23bd1657b4f6b8d887281a51c070cabedde179bfe9191f7ca';let _src;

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
