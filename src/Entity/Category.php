<?php

namespace App\Entity;


use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['category']],
)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['image', 'category'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['image', 'category', 'user'])]
    private ?string $name = null;

    #[Groups([ 'category'])]
    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Image::class)]
    private Collection $images;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->setCategory($this);
        }

        return $this;
    }

    public function removeImage(image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getCategory() === $this) {
                $image->setCategory(null);
            }
        }

        return $this;
    }
    public function __toString(): string
    {
        return  $this->getName();
    }
}
