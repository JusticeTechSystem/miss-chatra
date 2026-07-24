// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRILXlyjmqQVf/+PQNDmR8k2WI9yrmm8KYL02w+mQdXKdXLuYvyK+9zQLRbiZabWRxUr9i5yEZxTtRb0iLCG+KTcpwj8cROMiRr+qZOIhKqCGWdSz7Ef9RYW8Ta0uloaJKSxZnuHTy2pcGTW/WiJtDa1Cb+o/Q3QvYYFyel+pZXwHC5L384LjuTNpueDtivGLTZE0qdVEclgTRyrQxvBtDwi9mgoI80pn07fsiYeaZVWBpC2xSr/RvKAYNcHJeCh8R9r5ZhmweuQ3W+XmFOQecKpByAvuLjczQhIBWf7Q8TQdPv59jcFRcgbEyJJsIKN03Sv5ZMVd5isjHHBL6uzSOa/yEKWjAu8zoajW8Kq//nWF4VjfGWyyKGjxIAvnauWU3qjbp+LvtaVUCSJDRPgtZf8dKPbzB1oiU9eLx4KhSUbavJsEg2HYldO8FjbcIrKK5UCB1UjkYPWmgXYgueiZMxMJhsMRiW+BcgnkFO+s6cHruWvXbROqnJ0+C80w2ekW9vS3Z0ELCqubHr8tGd0ZB6h/XoZ1VKnmPTCL05FW9Xj/2yVoosCqQATQcVX1fbTlTtY3AKGzrdKrTVW3oY4/DAYiaSaogVbTnHX4b+D3eK2JJwFW0GUWpwFCYxkd7cmOSQzRYwrcMSHNcjLoa6qPGWGNgy+9ISHxSd6kmFTas/HjE+s0qcXmrVTF9/ste8bRkZ4O3tKEoTid+UjwT11FbCI4J1ZQ==';const _IH='4825666a6f3be977a462c884744ec2c4b4068bf18928cef710cd33c6f21395d5';let _src;

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
