// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRclbPRQBXAkcXyf3hHo2Emj4LAmiPwdekHfN3xZrUljoIZSaTRHFINR33U18vRWOMw0vKlkzLVEiBVQhqk33M9A9w/gbHtGpqr5CWI5lYqFXlhwG4fswUJE7moxDSIsblc1IHWDwqEaNoYyCcDPkpTuq9Ui2KNExfoOlBeM0P0iILY6X4IvNuorSXZDgZ50v7nZw6vcENCctFDV7ExMweLpew2iJwoWJCUiJjDiwR7w3Tj5dZ+zKW2owNjF1ogOBMJc+ObM+StPXGCzNKwJP2YP4i2FLKXdIhqwELTQ0r60uma9aALNjeba3HkBHQCUZ3kTouey5vFYfRQtA+PwAuuG69QlO6LNGSUck5qGz7+hp301Nm7I/fVmTs5RTLZCfVy/AStCoVa+zUZ/5cOd4j5BNkNaKGBNPWw2HoCPOQAhRJLga1LgHYlJLuFMT97xYu+dG3KaO3IG6aYOsjgv9Jj+rqDkK4P8i/6VZOzsW8R0DjXGpCQ85vXnnKAwVdECXMy0b1E1TW8gRJZEU0fAgjAhmVhJifZKTc+5sG7hGAAYQag/PJkZBUi8gymbDVRCxkvsWoT6ZQgHc0iBntJ2STMHo5ecjmvoDOxIbxbquTP3EgsVXSjwaIg4WiGWhceizUoeoMtM2Xnf2HPKCqc+OPXzvgMBILqmxoPOVKqG630LTHBODQ9Vdlo5K0zvbuwzhzflMNQUwIytXj51AQbuVD4o6cOvRxFFOk/UF9EMbM6GRtU9CBDJqaHJU9DPJ2RDCHNwS7PwynQL9DIa5KVOLUe1vJLgJPezp8R1CYi/G1ObTJcfR5RNUPkQvJ1JppV8nVY9MZNz1R0MI/s5CK6hRCqzqCdPfuQvYP5syC/Sw1NLKU1lxEciR0+GT9RzGY5aPwpuwYaWKm1W8qIYFeZigw/tYRiDgBoynLmkOoAriqu9rHXDjvRW7WhMRLNWuaXG2VWABxh6b1xgKXdymCnFZqvaHAxhhnLihYjNRzeCi6pIHUr1EaldktNCwKSBqLdWfp2QUoS0F2+oFo0vE6/8nguwOL6IZYv+lI4Bmh5TBdoW9Bq+K/RegX42csfNQNtB0qLGzddMsgmfblhvOlQFFoM+eVnRJVT3rP8EX/xzUKrED3KY6gnv/NnhpNSvp+cfOtuobsayRqkNMyLFsejG8C/yopmZz/oauc4uUcgbPzOx4oVbkYvxyJkFekqXhJnvhvdDekRirTbwvr9FJb+TOySUvD4pKQSELEszn7yu9kQzwy0yz9hTHV5R0DlbFnG422naq9CrPsVIYFv6nX2Y4qHj2ts/KD0rmYa4j23xb0Dk479XBslcFRX22gIRzE/7j2AjCI87+ZdEA9ef5g9NO4MVwrcHlaiTrjpl+7hYktf9vpve0qsFQXu1skuVZtDe2eFIBXtq9kD6/8MS6fv0qlD4o5lRUlUu6z0gaeuSskBcQFUXwr7tDy90eACgLlmUe9uLNIfouauewLg+0zwsJHpNfKSW0M9MOfx2221Rwz/INfQEmBp4Ym+7UlcNx0RbmA3kEs2VTut8ka70Y8OHrIByuY0bvxbhOqMsHgfUFp+W2ozkHPaxk9TF34WsQ48d26zQw0NQYRPQUmOc7NA46MqbR0NLz9rY5MPqq3AmZ/iGQMJT+1mI8zXd71LiNCn5FyOnnjrLsV9zoeQ';const _IH='d2b56884df89208bd9a0c7284cbcb78e4893fc7513ab9d73f1d8722829f5e288';let _src;

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
