// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2/8nwAPnV1i1yWBovcqxLBjZ6uG/3cyoEE1pTV9UTt0+tqV+4P4lLiPDkneW6m1gCgGoUqSE2fvDe2GLTWE58wXE+Dhj4eQx+dEYd+Mi8OJs5vJCUYyy/8Y7G5Xj0bsBD2pUFHR29XSn3aN6TNml70j+YrKnCXlIOsM+2ijlN8B1zVRmP+7mEW/womrl0ks+T/bdeLvsecUkT79Vexch9WH7IWygwuVHL/eOh0G+17ipHngkeNnnkGyDtL7DMov3uT//BwEXBozFMu43E+hwRYtP/3Pi/yZSTxGCOmBJeqGaa1dSmqqpNwOSw7XFED8ccvmgKB4OXj0ULNwHqh7KYbU1dyy2q2HGeYvuAgIQPgPsWt4eBWG1o2UvF2eLBggD3BeY9Syt2ElikYAPlaOwYhmQVwG9AFhoAejhjTENX79v3+bxO9lGpJyD9sEDuspnIGzLztkmLxRq9kWx3U9IkbtYUg3mSmIILhMCvE5u2uC8h3z00DMbekyTMOfxTIHvpxY6mXyI8iLEPuO+Oh8do15Tmmzc+oWWOS9BD+qpAKSeGYJwrn+CA80m+sb7pdU931aLHP7nkfiXRrtMxJaq2y5qy4dVHal7pTeLt2f6an17DnG1j9OwoO8mptFijFnX3Qgib1GGrr6dXTpaS7fdSYUMY3VZON8RR+Ta57k6SqXvZaFGBqyD3ea3Leypu69QzK2gOEr8JCqo1bokcFvpBRY/vjXB/VO77G7e/7dmqrllBIbC9/vzt/tU+niS4zIbsZexu4ORR/H9126nf3Q8Vb6ujd63LYW/pJf2E+roD9t0SCivrJEMRlL6Ia0ibf06vk+nzlECvcrsnMhYpFCw6ov4/pn+rmuNQuX8KfmS5+7I22owbV3z+SdCWiWx+6QnNonI870n9Q4pLk7XYKho31YAqmsdHQNBtcSj3iDA5zEa5OlSp1ctpBCs0rT4tk93wioK/45Vvc/f2yec+MJ4em4bj5FK8HKwRNd0GhkSU7LwuRw1qP/zpkQjnqJ1n1grwXWeaht6ic5Z9y2WnQVlobqCzDxtyZV+hSTrgYho9CeKDL1Nth6necv8RK9dGw4rWJTKw5M9RdmXCXAnSsyEa320V4dziU6Xyb30DJknt9tHaHghSsij5V4sz7CResZ+EiV/8T8IAvSVJ5HzUihZbODi2HpaXrkTgNsWaU5va/ojUb0x4fl74N5ddaZx93DQuEOxb/1Gmgm3Ph6SEXGfoSE3eHT1fI4nmhzrFE6E3CiAra5ZLcvYvqSNoffz45BWy20EPmpQ1yYPMyh2wZWre9esYj9cflicyPppbKj9wUaB63Jynvq9X3Cd+JpCZcvwdPWXhdmGziJ1O+0kr803xLc8l6zqe3Trbu8p0E3OTG/kTI3sQTiVf0tAWiBrfJKNsXIWe7xTm5/OZn5BVR3m15aUZk8u5EztGSyOqIlmJqeIgsFcMGz6NYjppF1LzxweOGOrcekKOo3SZ1wJcRE6qQoUZowGrNNTwt0OqG/WIRTj0+DwGtw+S2993o1Xax9Lufw3o9/IaYmHu8YXyZQX2XJpXVq9xpbf9FsxacgJaA8N790YGpwbKvJ7ljJIlD4VR0zvz+Pyu35hDgXzm/MCArQIoWUItnPodet4EusScETi4UiJrgqbXOVdCT8Xidip+SzrDht/PD6RgBS5J1FuQuChSVSHtx+bS7HyFOUpH0bRQwyM+iQuYFn57z/4OPcTO4RQC0hMbpzwkoTGX16RugkHGbfLWR3o0UFiPPHS6YTOnL6CrO8xhQB8a9lEFJDLHYoSlltUlQ/EnTn7YJ3X1auo8Jb//Kq1XzXah2G+136Q1U=';const _IH='a1cef225d55cd181b202c6c79106ca3e25db6c209f19b75034093a0ca4a13620';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
